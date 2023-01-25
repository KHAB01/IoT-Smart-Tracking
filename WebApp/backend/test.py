# Import flask and datetime module for showing date and time
from flask import Flask
from math import *


# Initializing flask app
app = Flask(__name__)
captor_1={'x1':350 - 100, 'y1':10}
captor_2={'x2':0, 'y2':0}
captor_3={'x3':0, 'y3':0}
captor_4={'x4':0, 'y4':0}
captor_5={'x5':0, 'y5':0}
captor_6={'x6':0, 'y6':0}




# Route for seeing a data
@app.route('/data')
def get_time():
    # d=150
    # y= d/(sqrt(1+tan(7.5)**2))
    # x=sqrt(d**2-y**2)
	x=10
	y=2

	# Returning an api for showing in reactjs
	return {
		'x':captor_1['x1']-x,
		"y":captor_1['y1']-y

		}

	
# Running app
if __name__ == '__main__':
	app.run(host='127.0.0.1/', port=5000)
