from PicoAutonomousRobotics import KitronikPicoRobotBuggy
from time import sleep

from configuration import Configuration
from lights import Lights
from messaging import Messaging
from movement import Movement
from networking import Networking


def main():
    config = Configuration()
    buggy = KitronikPicoRobotBuggy()
    buggy.setMeasurementsTo("cm")
    movement = Movement(buggy)
    lights = Lights(buggy)
    wlan = Networking(config)
    mqtt = Messaging(config)

    try:
        client = mqtt.mqtt_connect()
    except OSError as e:
        mqtt.reconnect()

    while True:
        movement.beepHorn
        lights.headLights("on")
        lights.tailLights("on")
        sleep(2)
        for blink in range(6):
            lights.indicatorLeft("on")
            sleep(0.2)
            lights.indicatorLeft("off")
        sleep(1)
        lights.lightsOut()
        sleep(1)


main()
