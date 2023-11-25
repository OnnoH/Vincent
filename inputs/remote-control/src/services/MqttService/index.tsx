import mqtt from 'mqtt';
import { MqttConfigInterface } from '../../interfaces/MqttConfigInterface';

function MqttService() {

    const mqttConfig: MqttConfigInterface = {
        url: process.env.REACT_APP_MQTT_BROKER_URL,
        channel: process.env.REACT_APP_MQTT_CHANNEL,
    };

    const client = mqtt.connect(mqttConfig.url);

    client.on("connect", () => {
        console.log("CONNECTED to broker");
    });
}

export default MqttService