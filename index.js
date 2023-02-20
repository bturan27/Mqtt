const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');
const topic = 'sport';
const message = 'brokera baglandiniz';

client.on('connect', () => {
    console.log(`Is client connected: ${client.connected}`);
    if (client.connected === true) {
        console.log(`message: ${message}, topic: ${topic}`);
        // publish message
        client.publish(topic, message);
    }

    // subscribe to a topic
    client.subscribe(topic);
});
//abone oldugun spor sayfasinda mesaj almak gibi
// receive a message from the subscribed topic
client.on('message',(topic, message) => {
    console.log(`message: ${message}, topic: ${topic}`);
});

// error handling
client.on('error',(error) => {
    console.error(error);
    process.exit(1);
});