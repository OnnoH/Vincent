import turtle
import random
import paho.mqtt.client as mqtt
from jproperties import Properties

configs = Properties()
with open('turtle.properties', 'rb') as config_file:
    configs.load(config_file)

mqtt_broker_host = configs.get("MQTT_BROKER_HOST").data
mqtt_broker_port = int(configs.get("MQTT_BROKER_PORT").data)

s = turtle.getscreen()
t = turtle.Turtle()
t.shape("turtle")
t.shapesize(3, 3, 3)
t.fillcolor("blue")
t.pencolor("blue")


def stars():
    for i in range(5):
        t.fd(10)
        t.right(144)


def on_message_direction(client, userdata, msg):
    print(str(msg.payload.decode('utf-8')))
    direction = str(msg.payload.decode('utf-8'))
    match direction:
        case "links":
            t.left(90)
        case "rechts":
            t.right(90)
        case "op":
            t.forward(10)
        case "neer":
            t.backward(10)
        case "stop":
            t.clear()
            t.reset()
            t.shape("turtle")
            t.shapesize(3, 3, 3)
            t.fillcolor("blue")
            t.pencolor("blue")
            t.showturtle()
            s.bgcolor("white")


def on_message_object(client, userdata, msg):
    print(str(msg.payload.decode('utf-8')))
    object = str(msg.payload.decode('utf-8'))
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


def on_message_colour(client, userdate, msg):
    print(str(msg.payload.decode('utf-8')))
    colour = str(msg.payload.decode('utf-8'))
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


def on_message_penstate(client, userdate, msg):
    print(str(msg.payload.decode('utf-8')))
    penstate = str(msg.payload.decode('utf-8'))
    match penstate:
        case "aan":
            t.pendown()
        case "uit":
            t.penup()


client = mqtt.Client("Vincent_Consumer")
client.message_callback_add("Vincent/Movement/direction", on_message_direction)
client.message_callback_add("Vincent/Object/object", on_message_object)
client.message_callback_add("Vincent/Colour/colour", on_message_colour)
client.message_callback_add("Vincent/PenState/penstate", on_message_penstate)
client.connect(mqtt_broker_host, mqtt_broker_port)
client.subscribe("Vincent/#")
client.loop_forever()
