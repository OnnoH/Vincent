import network


class Networking:
    def __init__(self, config) -> None:
        self.wlan = network.WLAN(network.STA_IF)
        self.wlan.active(True)
        self.wlan.connect(config.wlan_ssid, config.wlan_secret)
        print('Connected to WLAN %s' % (config.wlan_ssid))
