# Import flask and datetime module for showing date and time
from flask import Flask, jsonify
from math import *


# Initializing flask app
app = Flask(__name__)
captor_1 = {'x': 412, 'y': 10, 'd': 0}
captor_2 = {'x': 332, 'y': 80, 'd': 200}
captor_3 = {'x': 302, 'y': 192.2624969482422, 'd': 0}
captor_4 = {'x': 332, 'y': 300, 'd': 0}
captor_5 = {'x': 412, 'y': 375, 'd': 0}
captor_6 = {'x': 572, 'y': 379.5375061035156, 'd': 0}
captor_7 = {'x': 677, 'y': 284.5375061035156, 'd': 0}
captor_8 = {'x': 687, 'y': 120, 'd': 0}
captor_9 = {'x': 592, 'y': 10, 'd': 0}

# data = [captor_1, captor_2, captor_3, captor_4, captor_5, captor_6,captor_7,captor_8,captor_9]
data=[60]

# Route for seeing a data
@app.route('/data')
def get_time():
    xf = 0
    yf = 0
    dataa=[]
    for i in range(0, len(data)):
        # if data[i]['d'] != 0 :
        #     xf = data[i]['x']
        #     yf = data[i]['y']
        #     d = data[i]['d']
        d=data[i]
        

        d = d*0.6
        y = d/(sqrt(1+tan(15)**2))
        x = sqrt(d**2-y**2)
        dataa.append({'x': x+captor_1['x'], 'y': y+captor_1['y']})
        


    
    return jsonify(dataa)
    # Returning an api for showing in reactjs
     


# Running app
if __name__ == '__main__':
    app.run(host='127.0.0.1/', port=5000)
