# picam-config

This app is a companion app for [wildlife detection](https://github.com/maxupravitelev/wildlife_detection). It's goal is to provide users with a remote frontend GUI (built with React) to configure the app.

Features:
- try out different PiCam settings in realtime (like setting different white balance values)
- adjust the position of the camera by moving a GPIO connected stepper motor

App-Demo:
- You can checkout a (not actually updating) demo at: LINK

Hardware requirements:
- A raspberry pi to run the backend [adjust.py](https://github.com/maxupravitelev/wildlife_detection/blob/main/adjust.py). Tested with a raspberry pi 4B, older models will also work (probably).
- Optional: A GPIO connected stepper motor

