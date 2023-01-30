# Import flask and datetime module for showing date and time
from flask import Flask, jsonify
from math import *


# Initializing flask app
app = Flask(__name__)
data = {'capteur_3': 100}
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



# Route for seeing a data
@app.route('/data')
def get_time():
    xf = 0
    yf = 0
    dataa=[]
    
    # for i in range(0, len(data)):
        # if data[i]['d'] != 0 :
        #     # xf = data[i]['x']
        #     # yf = data[i]['y']
        #     # d = data[i]['d']
        # d=data[i]
        # d = d*0.6
        # y = d/(sqrt(1+tan(60)**2))
        # x = sqrt(d**2-y**2)
    for captor, value in data.items():
        
        captor_dict = captors[captor]
        captor_dict['d'] = value
        xf = captor_dict['x']
        yf = captor_dict['y']
        d = captor_dict['d']
        d = d*0.6
        if captor == "capteur_1":
            y = d/(sqrt(1+tan(30)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf+x, 'y': yf+y,'name': captor})
            print(dataa)
        elif captor == "capteur_2":
            y = d/(sqrt(1+tan(30)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf+x, 'y': yf+y,'name': captor})
        elif captor == "capteur_3":
            x = d
            dataa.append({'x': xf+x, 'y': yf,'name': captor})
        elif captor == "capteur_4":
            y = d/(sqrt(1+tan(15)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf+x, 'y': yf-y,'name': captor})
        elif captor == "capteur_5":
            y = d/(sqrt(1+tan(60)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf+x, 'y': yf-y,'name': captor})
        elif captor == "capteur_6":
            y = d/(sqrt(1+tan(60)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf-x, 'y': yf-y,'name': captor})
        elif captor == "capteur_7":
            y = d/(sqrt(1+tan(60)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf-x, 'y': yf-y,'name': captor})
        elif captor == "capteur_8":
            y = d/(sqrt(1+tan(60)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf-x, 'y': yf-y,'name': captor})
        elif captor == "capteur_9":
            y = d/(sqrt(1+tan(60)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf-x, 'y': yf+y,'name': captor})
        elif captor == "capteur_10":
            y = d/(sqrt(1+tan(60)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf-x, 'y': yf+y,'name': captor})
        elif captor == "capteur_11":
            y = d/(sqrt(1+tan(60)**2))
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf-x, 'y': yf+y, 'name': captor})

        elif captor == "capteur_12":
            y = d
            x = sqrt(d**2-y**2)
            dataa.append({'x': xf+x, 'y': yf , 'name': captor})


            
        

    return jsonify(dataa)
    
      
    
        


    
    
    # Returning an api for showing in reactjs
     


# Running app
if __name__ == '__main__':
    app.run(host='127.0.0.1/', port=5000)













