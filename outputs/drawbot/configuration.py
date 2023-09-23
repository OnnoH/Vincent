from jproperties import Properties


class Configuration:
    def __init__(self) -> None:
        configs = Properties()
        with open('drawbot.properties', 'rb') as config_file:
            configs.load(config_file)
        self.mqtt_broker_host = configs.get("MQTT_BROKER_HOST").data
        self.mqtt_broker_port = int(configs.get("MQTT_BROKER_PORT").data)
        self.client_id = configs.get("CLIENT_ID").data
        self.keep_alive = configs.get("KEEP_ALIVE").data
        self.wlan_ssid = configs.get("WLAN_SSID").data
        self.wlan_secret = configs.get("WLAN_SECRET").data
