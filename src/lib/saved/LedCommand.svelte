<script>
	import { onMount, onDestroy } from 'svelte';
	import io from 'socket.io-client';

	let socket;
	let status = '';

	function connectSocket() {
		// Connect to server using Socket.IO client
		socket = io('http://localhost:3344');
		socket.on('connect', () => {
			console.log('Connected to server');
		});

		// Receive status data from server
		socket.on('mqtt-status', (data) => {
			status = data;
		});
	}

	function disconnectSocket() {
		// Disconnect from server
		if (socket) {
			socket.disconnect();
			console.log('Disconnected from server');
		}
	}

	// ...
	function turnOnLed() {
		// Send command to turn on LED to server
		if (socket) {
			// Mengirim pesan dari klien ke server
			socket.emit('client-action', 'LED ON');
		}
	}

	function turnOffLed() {
		// Send command to turn off LED to server
		if (socket) {
			// Mengirim pesan dari klien ke server
			socket.emit('client-action', 'LED OFF');
		}
	}
	// ...

	onMount(() => {
		connectSocket();
	});

	onDestroy(() => {
		disconnectSocket();
	});
</script>

<p>{status}</p>

<button on:click={turnOnLed}>Turn On LED</button>
<button on:click={turnOffLed}>Turn Off LED</button>
