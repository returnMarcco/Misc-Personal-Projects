var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://broker.mqttdashboard.com');

// SIMULATED LDD DRONE
// use lat/lon to infer how long a drone has been stationary (if at all)
// -----------------------------------------------------------------------

client.publish('Drones/LDD/Battery', '2%');
client.publish('Drones/LDD/Altitude', '200');
client.publish('Drones/LDD/Lat', '10.6');
client.publish('Drones/LDD/Lon', '32.3');

// SIMULATED SDD DRONE
// use lat/lon to infer how long a drone has been stationary (if at all)
// -----------------------------------------------------------------------

// client.publish('Drones/SDD/Battery', '8%');
// client.publish('Drones/SDD/Altitude', '150');
