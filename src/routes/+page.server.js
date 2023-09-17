import mqtt from 'mqtt';
import mqttData from '../lib/js/store';

const client = mqtt.connect('mqtt://public.mqtthq.com');
client.on('connect', () => {
	console.log('Terhubung ke broker MQTT');
	client.subscribe('led/alan');
});

client.on('message', (topic, message) => {
	// console.log(`Pesan dari topik ${topic}: ${message.toString()}`);
	mqttData.set(message.toString()); // Perbarui nilai store
});
