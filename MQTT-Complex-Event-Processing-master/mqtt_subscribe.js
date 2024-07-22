var mqtt = require('mqtt');
var clientSubscribe  = mqtt.connect('mqtt://broker.mqttdashboard.com');

var lowBatteryCounter = 0;
var stagnantCounter = 0;

// Topic variables
var lddBatteryTopic = 'Drones/LDD/Battery';
var sddBatteryTopic = 'Drones/SDD/Battery';
var lddLatTopic = 'Drones/LDD/Lat';
var lddLonTopic = 'Drones/LDD/Lon';
var lddAltitudeTopic = 'Drones/LDD/Altitude';
var sddLatLonTopic = 'Drones/SDD/Lat&Long';
var sddAltitudeTopic = 'Drones/SDD/Altitude';
var date = new Date();

// Breaking the global variable rule for the purpose of demonstrating CEP
var highestAltitudeLastComparison = -1;
var latComparison = -1;
var lonComparison = -1;
var latMessage = -1;
var lonMessage = -1;
var latComparisonMinutes = -1;
var lonComparisonMinutes = -1;

// Topic filters using Wildcards
clientSubscribe.subscribe('Drones/+/Battery');
clientSubscribe.subscribe('Drones/+/Lat');
clientSubscribe.subscribe('Drones/+/Lon');
clientSubscribe.subscribe('Drones/+/Altitude');

function publishHighAndStagnantAlert()
{
    clientSubscribe.publish('Drones/Alerts', 'ALERT: AT LEAST ONE DRONE HAS BEEN STAGNANT AND 100FT. OR HIGHER FOR TEN OR MORE MINUTES');
    console.log('Stagnant Conditions Met: ' + stagnantCounter);
}

function lowBatteryAlert(message)
{
    // If a message shows ANY drone having a battery level < 10% then increment lowBatteryCounter by 1, then if lowBatteryCounter >= 2 do publish ALERT.
    if (message <= 10)
    {
        lowBatteryCounter++;
        console.log('Low Battery Counter: ' + lowBatteryCounter);
        
        if (lowBatteryCounter >= 2)
            {
                clientSubscribe.publish('Drones/Alerts', 'ALERT: AT LEAST 2 DRONES HAVE LOW BATTERY LEVELS');
            }
    }
}

function altitudeCheck(altitude) 
{
    if (altitude >= 100)
    {
        var highestAltitudeFirstCheck = date.getMinutes(); 
        
        if (highestAltitudeLastComparison != -1 && highestAltitudeFirstCheck - highestAltitudeLastComparison > 10)
        {
           highestAltitudeLastComparison = highestAltitudeFirstCheck;
           checkLat(latMessage);
           stagnantCounter++;
        }
        
        else
        {   
            highestAltitudeLastComparison = highestAltitudeFirstCheck;
        }
    }
}

function checkLat(latMessage)
{
    var checkLatMinutes = date.getMinutes();
    
    if (latMessage != -1 && latMessage == latComparison && checkLatMinutes - latComparisonMinutes > 10)
    {
        latComparisonMinutes = date.getMinutes();
        checkLon(lonMessage);
        stagnantCounter++;
    }
   
    else
    {
        latComparison = latMessage;
        latComparisonMinutes = date.getMinutes();
    }
}

function checkLon(lonMessage)
{
    var checkLonMinutes = date.getMinutes();
    
    if (lonMessage != -1 && lonMessage == lonComparison && checkLonMinutes - lonComparisonMinutes > 10)
    {
        lonComparisonMinutes = date.getMinutes();
        stagnantCounter++;
        publishHighAndStagnantAlert();
    }
   
    else
    {
        lonComparison = lonMessage;
        lonComparisonMinutes = date.getMinutes();
    }
}

clientSubscribe.on('message', function (topic, message) {
    console.log(topic + ': ' + message.toString());
    
    if (topic == lddBatteryTopic || topic == sddBatteryTopic)
    {
        var basicMessage = parseInt(message);
        lowBatteryAlert(basicMessage);
    }

    if (topic == lddAltitudeTopic || topic == sddAltitudeTopic)
    {
        var basicMessage = parseInt(message);
        altitudeCheck(basicMessage);
       
    }

    if (topic == lddLatTopic)
    {
        latMessage = parseInt(message);
    }

    if (topic == lddLonTopic)
    {
        lonMessage = parseInt(message)
    }
});

 
