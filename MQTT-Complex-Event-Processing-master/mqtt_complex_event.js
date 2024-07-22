var mqtt = require('mqtt');
var complexEventSubscribe  = mqtt.connect('mqtt://broker.mqttdashboard.com');

// Subscribe to the Alert subtopic
complexEventSubscribe.subscribe('Drones/Alerts');

complexEventSubscribe.on('message', function (topic, message) {
    console.log('Topic: ' + topic);
    console.log(message.toString());
});