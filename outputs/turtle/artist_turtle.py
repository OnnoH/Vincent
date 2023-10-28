import turtle
import random
import json
import paho.mqtt.client as mqtt
from svg2turtle import draw_svg
from jproperties import Properties

configs = Properties()
with open('turtle.properties', 'rb') as config_file:
    configs.load(config_file)

mqtt_broker_host = configs.get("MQTT_BROKER_HOST").data
mqtt_broker_port = int(configs.get("MQTT_BROKER_PORT").data)
client_channel = configs.get("MQTT_TOPIC_CHANNEL").data

s = turtle.Screen()
t = turtle
t.shape("turtle")
t.shapesize(3, 3, 3)
t.fillcolor("blue")
t.pencolor("blue")


def stars():
    for i in range(5):
        t.fd(10)
        t.right(144)


def getChannel(topic):
    topicSplit = topic.split("/")
    return topicSplit[-1]


def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("connected OK Returned code=", rc)
    else:
        print("Bad connection Returned code=", rc)


def on_message_direction(client, userdata, msg):
    if getChannel(msg.topic) == client_channel:
        payload = json.loads(msg.payload)
        direction = payload["direction"]
        number = int(payload["number"])
        match direction:
            case "links":
                t.left(number)
            case "rechts":
                t.right(number)
            case "voor":
                t.forward(number)
            case "terug":
                t.backward(number)
            case "opnieuw":
                t.clear()
                t.reset()
                t.shape("turtle")
                t.shapesize(3, 3, 3)
                t.fillcolor("blue")
                t.pencolor("blue")
                t.showturtle()
                s.bgcolor("white")


def on_message_object(client, userdata, msg):
    if getChannel(msg.topic) == client_channel:
        payload = json.loads(msg.payload)
        object = payload["object"]
        match object:
            case "huis":
                t.forward(100)
                t.right(90)
                t.forward(100)
                t.right(90)
                t.forward(100)
                t.right(90)
                t.forward(100)
                t.right(45)
                t.forward(70)
                t.right(90)
                t.forward(70)
            case "ster":
                for x in range(0, 5):
                    t.forward(100)
                    t.right(144)
            case "maan":
                s.bgcolor("dark blue")
                t.up()
                t.goto(0, -200)
                t.color("orange")
                t.begin_fill()
                t.circle(200)
                t.end_fill()
                t.up()
                t.goto(50, -200)
                t.color("dark blue")
                t.begin_fill()
                t.circle(200)
                t.end_fill()
                t.hideturtle()
            case "sterrenhemel":
                s.bgcolor("black")
                t.color("white")
                s.title("Starry Starry Night")
                t.speed(0)
                t.hideturtle()
                t.up()
                t.goto(0, 170)
                t.down()
                t.begin_fill()
                t.circle(80)
                t.end_fill()
                for i in range(100):
                    x = random.randint(-640, 640)
                    y = random.randint(-330, 330)
                    t.up()
                    t.goto(x, y)
                    t.down()
                    stars()
            case other:
                draw_svg(t, object + "-color")


def on_message_colour(client, userdata, msg):
    if getChannel(msg.topic) == client_channel:
        payload = json.loads(msg.payload)
        colour = payload["colour"]
        match colour:
            case "blauw":
                t.pencolor("blue")
                t.fillcolor("blue")
            case "rood":
                t.pencolor("red")
                t.fillcolor("red")
            case "geel":
                t.pencolor("yellow")
                t.fillcolor("yellow")
            case "groen":
                t.pencolor("green")
                t.fillcolor("green")
            case "zwart":
                t.pencolor("black")
                t.fillcolor("black")
            case "roze":
                t.pencolor("pink")
                t.fillcolor("pink")
            case "oranje":
                t.pencolor("orange")
                t.fillcolor("orange")


def on_message_penstate(client, userdata, msg):
    if getChannel(msg.topic) == client_channel:
        payload = json.loads(msg.payload)
        penstate = payload["penstate"]
        match penstate:
            case "aan":
                t.pendown()
            case "uit":
                t.penup()


client = mqtt.Client("Vincent_Consumer+"+client_channel)
client.on_connect = on_connect
client.message_callback_add("Vincent/Movement/+", on_message_direction)
client.message_callback_add("Vincent/Object/+", on_message_object)
client.message_callback_add("Vincent/Colour/+", on_message_colour)
client.message_callback_add("Vincent/PenState/+", on_message_penstate)
client.connect(mqtt_broker_host, mqtt_broker_port)
client.subscribe("Vincent/#")
client.loop_forever()
