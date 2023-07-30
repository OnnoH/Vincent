mkdir -p $PWD/data/mqtt/data
mkdir -p $PWD/data/mqtt/log

docker run \
 --publish 1883:1883 \
 --publish 9001:9001 \
 --volume $PWD/mosquitto.conf:/mosquitto/config/mosquitto.conf \
 --volume $PWD/data/mqtt/data:/mosquitto/data \
 --volume $PWD/data/mqtt/log:/mosquitto/log \
 --name broker \
 --detach \
 eclipse-mosquitto
