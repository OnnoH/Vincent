import os
import pvporcupine
import pvrhino
import paho.mqtt.client as mqtt
from pvrecorder import PvRecorder
from datetime import datetime
from jproperties import Properties

configs = Properties()
with open('picovoice.properties', 'rb') as config_file:
    configs.load(config_file)

access_key = configs.get("PV_ACCESS_KEY").data
base_dir = configs.get("PV_BASEDIR").data
porcupine_keyword_path = "".join(
    [base_dir, "/", configs.get("PV_PORCUPINE_KEYWORD_PATHS").data])
porcupine_keyword_paths = list()
porcupine_keyword_paths.append(porcupine_keyword_path)
porcupine_model_path = "".join(
    [base_dir, "/", configs.get("PV_PORCUPINE_MODEL_PATH").data])
rhino_model_path = "".join(
    [base_dir, "/", configs.get("PV_RHINO_MODEL_PATH").data])
rhino_context_path = "".join(
    [base_dir, "/", configs.get("PV_RHINO_CONTEXT_PATH").data])
mqtt_broker_host = configs.get("MQTT_BROKER_HOST").data
mqtt_broker_port = int(configs.get("MQTT_BROKER_PORT").data)

porcupine = pvporcupine.create(
    access_key=access_key,
    keyword_paths=porcupine_keyword_paths,
    model_path=porcupine_model_path
)

rhino = pvrhino.create(
    access_key=access_key,
    context_path=rhino_context_path,
    model_path=rhino_model_path
)

keywords = list()
for x in porcupine_keyword_paths:
    keyword_phrase_part = os.path.basename(x).replace('.ppn', '').split('_')
    if len(keyword_phrase_part) > 6:
        keywords.append(' '.join(keyword_phrase_part[0:-6]))
    else:
        keywords.append(keyword_phrase_part[0])


def on_publish(client, userdata, mid):
    print("sent a message")


mqttClient = mqtt.Client("Vincent_Producer")
mqttClient.on_publish = on_publish
mqttClient.connect(mqtt_broker_host, mqtt_broker_port)
mqttClient.loop_start()

print('Porcupine version: %s' % porcupine.version)
print('Rhino version: %s' % rhino.version)

recorder = PvRecorder(
    frame_length=porcupine.frame_length,
    device_index=-1
)
recorder.start()

print('Listening ... (press Ctrl+C to exit)')
awake = False
try:
    while True:
        wake = recorder.read()
        result = porcupine.process(wake)
        if result >= 0:
            print('[%s] Detected %s' % (str(datetime.now()), keywords[result]))
            awake = True
        if awake:
            is_finalised = rhino.process(wake)
            if is_finalised:
                inference = rhino.get_inference()
                if inference.is_understood:
                    for slot, value in inference.slots.items():
                        print("    %s : %s" % (slot, value))
                    topic = keywords[result] + "/" + \
                        inference.intent + "/" + slot
                    message = value.encode("utf-8")
                    info = mqttClient.publish(
                        topic=topic,
                        payload=message,
                        qos=0
                    )
                    info.wait_for_publish()
                    print(info.is_published())
                awake = False
except KeyboardInterrupt:
    print("Stopping...")
finally:
    recorder.delete()
    porcupine.delete()
    rhino.delete()
