#!/bin/bash

cp ../../outputs/turtle/artist_turtle.py .
cp ../../outputs/turtle/requirements.txt .

docker build --tag vincent-turtle --file Dockerfile .

rm artist_turtle.py
rm requirements.txt
