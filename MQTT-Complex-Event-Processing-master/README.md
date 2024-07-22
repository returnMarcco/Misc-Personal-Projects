# MQTT-Complex-Event-Processing
Utilizes the HiveMQ Broker: https://www.mqtt-dashboard.com/ <br><br>
An MQTT publish/subscribe console application. Demonstrates the publish/subscribe software architecture with simulated IIoT devices publishing telemetry to a public MQTT broker, and simulated 'subscriber' clients for receiving and inferring complex events from this data. <br>
<b>Note - Requires Internet Access to communicate with the web MQTT broker.<b> <br><br>
# Dependencies: <br>
  
* You will need NodeJs & NPM installed - https://nodejs.org/en/
* With Node installed, in the root of the project folder, run `npm -i` to acquire dependencies. <br><br>
# Running the Application:
* <i>You must ensure the following three steps are completed in order, with the terminal windows of steps one and two left running:</i> <br>
* 1. Navigate to the project directory's root in a terminal window and run `node mqtt_subscribe.js` - This will be the 'listening' client.
* 2. Navigate to the project directory's root in ANOTHER terminal window and run `node mqtt_complex_events.js` - This will be the client that processes complex events.
* 3. Navigate to the project directory's root in YET ANOTHER terminal window and run `node mqtt_publish.js` - This will be the 'publishing' client.<br>

If all goes well, your subscribing clients will receive the telemetry transmitted by the publishing client.
After certain conditions are met (stipulated in the mqtt_subscribe.js module), complex events will be inferred. For example, if more than two messages are received that indicate an IIoT device having low battery, a 'LOW BATTERY ALERT ON MORE THAN TWO DRONES' will be generated in the terminal running `mqtt_complex_events.js`.<br>

Feel free to experiment!
