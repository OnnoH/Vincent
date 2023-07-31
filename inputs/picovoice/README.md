# PicoVoice

In order to use this platform an account needs to bee created at

https://console.picovoice.ai

Upon creation, an AccessKey will be generated and this will allow use of the PicoVoice SDK's.

## Wake Word

In order to have Vincent react to its own name, a wake word must be learned. PicoVoice has the Porcupine SDK for that.

- https://picovoice.ai/docs/porcupine/

Next:

- Train the wake word
- Download the trained model file (.ppn)
- Download the parameter file (.pv) for the language spoken
  - https://github.com/Picovoice/porcupine/tree/master/resources
- Pick a favourite programming language
- Start coding

## Speech-to-Intent

In order to have Vincent react to its own name, a wake word must be learned. PicoVoice has the Rhino SDK for that.

- https://picovoice.ai/docs/rhino/

Next:

- Create a context
- Create an intent
- Create slots
- Add expressions with slot variables under the intent
- Test the words
- Download the trained model file (.rhn)
- Download the parameter file (.pv) for the language spoken
  - https://github.com/Picovoice/rhino/tree/master/lib/common
- Pick a favourite programming language
- Start coding

## The Code

The example `picovoice.py` reads the properties from the `picovoice.properties` file (see below). Then it instantiates the Porcupine and Rhino models, along with the voice recorder and the MQTT client.

Then it turns into a loop, waiting for the wake word followed by an intent. Once it recognises both, a message is send. The topic depends on the keyword, intent and slot. The value (payload) comes from the expression.

E.g.
|Topic|Payload|
|---|----|
|`/Vincent/Movement/direction`|`links`|
|`/Vincent/Object/object`|`huis`|
|`/Vincent/PenState/penstate`|`aan`|
|`/Vincent/Colour/colour`|`rood`|
|||

In this case the name of the intent matches the slot. The slots contain the variables (keywords) used in the intents expression(s), e.g. `teken $Object:object` or `(ga) $Movement:direction`.

## Properties

| Name                       | Description                                               |
| -------------------------- | --------------------------------------------------------- |
| PV_BASEDIR                 | folder that contains the PicoVoice files                  |
| PV_ACCESS_KEY              | the access key from the PicoVoice account                 |
| PV_PORCUPINE_KEYWORD_PATHS | name of the .ppn file                                     |
| PV_PORCUPINE_MODEL_PATH    | name of the .pv language file                             |
| PV_RHINO_CONTEXT_PATH      | name of the .rhn                                          |
| PV_RHINO_MODEL_PATH        | name of the .pv language file                             |
|                            |                                                           |
| MQTT_BROKER_HOST           | hostname or IP address of the MQTT server, e.g. localhost |
| MQTT_BROKER_PORT           | port number on which the broker is listening, e.g. 1883   |
|                            |                                                           |
