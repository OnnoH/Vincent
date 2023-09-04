# Turtle

## Setup

```shell
pip install -r requirements.txt
```

This will install the libraries needed for running the drawing client script.

## Drawing

The script initialises a Turtle drawing canvas and starts listening for topics published to the MQTT broker, starting with `/Vincent/#`.
Based on the topic and the message payload a drawing action will be performed.
