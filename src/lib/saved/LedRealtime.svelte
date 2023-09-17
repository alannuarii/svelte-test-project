<script>
	import { onMount, onDestroy } from 'svelte';
	import io from 'socket.io-client';

	let socket;
	let status = '';

	function connectSocket() {
		// Connect to server using Socket.IO client
		socket = io('http://localhost:3000');
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

	onMount(() => {
		connectSocket();
	});

	onDestroy(() => {
		disconnectSocket();
	});
</script>

<p>{status}</p>
