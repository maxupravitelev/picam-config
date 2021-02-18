# picam-config

This app is a companion app for [wildlife detection](https://github.com/maxupravitelev/wildlife_detection). It's goal is to provide users with a frontend GUI (built with React) to configure the app remotely.


## App-Demo
- You can checkout a (not actually updating) demo at: [picam configurator](https://musing-austin-88f127.netlify.app/)


## Features
- adjust your PiCam remotely, e.g. within a local network
- try out different PiCam settings in realtime (e.g. setting white balance values or trying out different image effects)
- adjust the position of the camera by utilizing a GPIO connected stepper motor


## Usage
- start [adjust.py](https://github.com/maxupravitelev/wildlife_detection/blob/main/adjust.py) on your raspberry pi to run the backend script.
- clone this repository on the machine you want to run the frontend on, `npm install` the package and `npm start` the app
- enter the URL of your video stream (if you run the frontend and backend on the same machine the default address is: `http://0.0.0.0:8000/`)


## Hardware requirements:
- A raspberry pi to run the backend [adjust.py](https://github.com/maxupravitelev/wildlife_detection/blob/main/adjust.py). Tested with a raspberry pi 4B, older models will also work (probably).
- Optional: A GPIO connected stepper motor


## Current stage
The app is currently in prototype stage with basic functionality. The next steps are:
- dynamically add and remove custom input fields to Picam configuration
- create profiles 
- generate raspivid cli commands based on config settings
