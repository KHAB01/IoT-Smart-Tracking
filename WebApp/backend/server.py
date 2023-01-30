
from flask import Flask, request, jsonify
from flask_mqtt import Mqtt
from datetime import datetime
import pymongo 
import uuid 

app = Flask(__name__)
app.config['MQTT_BROKER_URL'] = "192.168.10.19"
app.config['MQTT_BROKER_PORT'] = 1883
app.config['MQTT_KEEPALIVE'] = 5  # Set KeepAlive time in seconds
app.config['MQTT_TLS_ENABLED'] = False

ids=uuid.uuid1()
topic = "distance_s"
session=pymongo.MongoClient("mongodb+srv://Moncef:12345@sensor.un2niwv.mongodb.net/?retryWrites=true&w=majority")
db=session.SensorData
collection=db.DistanceSensor
client = Mqtt(app)

@client.on_connect()
def handle_connect(client, userdata, flags, rc):
    if rc == 0:
        print('Connected successfully')
        client.subscribe(topic) # subscribe topic
    else:
        print('Bad connection. Code:', rc)   
@client.on_message()
def handle_mqtt_message(client, userdata, message):
    
    if float(message.payload.decode()[10:])>=2:
        data = dict(
            Sensor=message.payload.decode()[0:9],
            Distance=float(message.payload.decode()[10:]),
            time=datetime.today()
        )
        print(data["Distance"])
        #collection.insert_one(data)
if __name__ == '__main__':
    app.run(host='127.0.0.1/', port=5000)