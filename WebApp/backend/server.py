# Import flask and datetime module for showing date and time
from flask import Flask
from math import *


# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/data')
def get_time():
    d=60*1.4
    y= d/(sqrt(1+tan(7.5*0.0174533)**2))
    x=sqrt(d**2-y**2)

	# Returning an api for showing in reactjs
    return {
		'x':x,
		"y":y

		}

	
# Running app
if __name__ == '__main__':
	app.run(host='127.0.0.1/', port=5000)
