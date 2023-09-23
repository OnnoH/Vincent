from umqtt.simple import MQTTClient
from machine import Timer
from time import sleep
import json


class Messaging:
    def __init__(self, config) -> None:
        self.config = config

    def mqtt_connect(self):
        client = MQTTClient(self.config.client_id, self.config.mqtt_broker_host,
                            port=self.config.mqtt_broker_port, keepalive=self.config.keep_alive)
        client.set_callback(subscription_callback)
        client.connect()
        print('Connected to %s MQTT Broker' % (self.config.mqtt_broker_host))
        return client

    def reconnect(self):
        print('Failed to connect to the MQTT Broker. Reconnecting...')
        sleep(5)
        Timer.reset()

    def subscription_callback(topic, msg):
        print("New message on topic {}".format(topic.decode('utf-8')))
        msg = msg.decode('utf-8')
        payload = json.loads(msg.payload)
        match topic:
            case "Vincent/Lights":
                if payload["light"] == "front":
                    Lights.HeadLights(payload["state"])
                if payload["light"] == "back":
                    Lights.TailLights(payload["state"])
                if payload["light"] == "brake":
                    Lights.BrakeLights(payload["state"])


client.message_callback_add("Vincent/Movement", on_message_direction)
client.message_callback_add("Vincent/Object", on_message_object)
client.message_callback_add("Vincent/Colour", on_message_colour)
client.message_callback_add("Vincent/PenState", on_message_penstate)
client.connect(mqtt_broker_host, mqtt_broker_port)
client.subscribe("Vincent/#")
client.loop_forever()
