
from flask import Flask, request, jsonify,render_template
from flask_mqtt import Mqtt
from datetime import datetime
import pymongo 
import uuid 
from math import *

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

captors = {
    'capteur_1': {'x': 412, 'y': 10},
    'capteur_2': {'x': 332, 'y': 80},
    'capteur_3': {'x': 302, 'y': 192.2624969482422},
    'capteur_4': {'x': 332, 'y': 300},
    'capteur_5': {'x': 412, 'y': 375},
    'capteur_6': {'x': 572, 'y': 379.5375061035156},
    'capteur_7': {'x': 642, 'y': 330},
    'capteur_8': {'x': 692, 'y': 255},
    'capteur_9': {'x': 692, 'y': 135},
    'capteur_10': {'x': 652, 'y': 60},
    'capteur_11': {'x': 592, 'y': 10},
    'capteur_12': {'x': 582, 'y': 192.2624969482422}
}


@client.on_connect()
def handle_connect(client, userdata, flags, rc):
    if rc == 0:
        print('Connected successfully')
        client.subscribe(topic) # subscribe topic
    else:
        print('Bad connection. Code:', rc) 

@client.on_message()
def handle_mqtt_message(client, userdata, message):
    global data
    if float(message.payload.decode()[10:])>=2:
        data = dict(
            capteur=message.payload.decode()[0:9],
            Distance=float(message.payload.decode()[10:]),
            time=datetime.today()
        )
        
       
        #print(data)
        #return data
    

        
@app.route("/data")
def index():
    
    xf = 0
    yf = 0
    dataa=[]


   
    for captor in data.keys():
        dataa=[]
        print(captor)

        captor_dict = captors[data['capteur']]
        print(captor_dict)
        captor_dict['Distance'] = data['Distance']
        captor_dict['captor'] = data['capteur']

        xf = captor_dict['x']
        yf = captor_dict['y']
        d = captor_dict['Distance']
        d = d*0.6

        if captor_dict['captor'] == "capteur_1":
            y = d/(sqrt(1+tan(30)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf+x, 'y': yf+y,'name': captor_dict['captor']})

        elif captor_dict['captor'] == "capteur_2":
            y = d/(sqrt(1+tan(30)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf+x, 'y': yf+y,'name': captor_dict['captor']})
        elif captor_dict['captor'] == "capteur_3":
            y = d/(sqrt(1+tan(15)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf+x, 'y': yf,'name': captor_dict['captor']})
        elif captor_dict['captor'] == "capteur_4":
            y = d/(sqrt(1+tan(15)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf+x, 'y': yf-y,'name': captor_dict['captor']})
        elif captor_dict['captor'] == "capteur_5":
            y = d/(sqrt(1+tan(60)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf+x, 'y': yf-y,'name': captor_dict['captor']})
        elif captor_dict['captor'] == "capteur_6":
            y = d/(sqrt(1+tan(60)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf-x, 'y': yf-y,'name': captor_dict['captor']})
        elif captor_dict['captor'] == "capteur_7":
            y = d/(sqrt(1+tan(60)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf-x, 'y': yf-y,'name': captor_dict['captor']})
        elif captor_dict['captor'] == "capteur_8":
            y = d/(sqrt(1+tan(60)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf-x, 'y': yf-y,'name': captor_dict['captor']})
        elif captor_dict['captor'] == "capteur_9":
            y = d/(sqrt(1+tan(60)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf-x, 'y': yf+y,'name': captor_dict['captor']})
        elif captor_dict['captor'] == "capteur_10":
            y = d/(sqrt(1+tan(60)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf-x, 'y': yf+y,'name': captor_dict['captor']})
        elif captor_dict['captor'] == "capteur_11":
            y = d/(sqrt(1+tan(60)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf-x, 'y': yf+y, 'name': captor_dict['captor']})

        elif captor_dict['captor'] == "capteur_12":
            y = d
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf+x, 'y': yf , 'name': captor_dict['captor']})
    return jsonify(dataa)
if __name__ == '__main__':
    app.run(host='127.0.0.1/', port=5000)