<script>
	import { onMount } from 'svelte';
	import mqtt from 'mqtt';
  
	let messages = [];
	const client = mqtt.connect('ws://test.mosquitto.org:8080');
  
	client.on('connect', () => {
	  console.log('Terhubung ke broker MQTT');
	  client.subscribe('led/alan');
	});
  
	client.on('message', (topic, message) => {
	  messages = [...messages, `Pesan dari topik ${topic}: ${message.toString()}`];
	});
  
	onMount(() => {
	  client.on('connect', () => {
		console.log('Terhubung ke broker MQTT');
	  });
	});
  </script>
  
  <h1>Pesan MQTT:</h1>
  
  {#each messages as message, index}
	<p key={index}>{message}</p>
  {/each}
  