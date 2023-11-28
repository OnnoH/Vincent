#!/bin/bash

CHANNEL=${1}

BROKER_HOST=host.docker.internal
BROKER_PORT=1883

DISPLAY=host.docker.internal:0

sed 's/@CHANNEL@/'${CHANNEL}'/; s/@BROKER_HOST@/'${BROKER_HOST}'/; s/@BROKER_PORT@/'${BROKER_PORT}'/;' turtle.properties > turtle-${CHANNEL}.properties

docker run --rm --user $(id -u $USER):$(id -g $USER) \
           --env DISPLAY=$DISPLAY \
           --volume ./turtle-${CHANNEL}.properties:/turtle.properties \
           vincent-turtle
