#!/bin/bash

cp ../../outputs/turtle/artist_turtle.py .
cp ../../outputs/turtle/svg2turtle.py .
cp -r ../../outputs/turtle/svg .
cp ../../outputs/turtle/requirements.txt .

docker build --tag vincent-turtle --file Dockerfile .

rm artist_turtle.py
rm svg2turtle.py
rm -r svg
rm requirements.txt
