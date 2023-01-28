from flask import Flask, request, jsonify
from flask_mqtt import Mqtt
from datetime import date

app = Flask(__name__)

app.config['MQTT_BROKER_URL'] = "192.168.10.18"
app.config['MQTT_BROKER_PORT'] = 1883
app.config['MQTT_KEEPALIVE'] = 5  # Set KeepAlive time in seconds
app.config['MQTT_TLS_ENABLED'] = False  # If your server supports TLS, set it True
topic = '/distance/s'

client = Mqtt(app)
@mqtt_client.on_connect()
def handle_connect(client, userdata, flags, rc):
    if rc == 0:
        print('Connected successfully')
        mqtt_client.subscribe(topic) # subscribe topic
    else:
        print('Bad connection. Code:', rc)
        
@mqtt_client.on_message()
def handle_mqtt_message(client, userdata, message):
    data = dict(
        topic=message.topic,
        payload=message.payload.decode()
    )
    #print('Received message on topic: {topic} with payload: {payload}'.format(**data))
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
