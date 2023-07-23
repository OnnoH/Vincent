# Communications Protocol

The drawing commands need to be sent to the Robot. A wired controller is out of the question (safety hazard) so wireless it is.

## WiFi

We don't want to interfere with the existing IT infrastructure of the library, so the WiFi network needs to be self-contained. It easy enough to setup an [Access Point](https://en.wikipedia.org/wiki/Wireless_access_point), but configuration might be a challenge.

## Alternative Networking

Like e.g. Bluetooth?

## Messaging

For a robot to understand and execute commands some kind of messaging system must be implemented.

A comparison: https://webbylab.com/blog/mqtt-vs-other-iot-messaging-protocols-detailed-comparison/
