<script>
	import mqttData from '../lib/js/store';

	let tes = null;

	mqttData.subscribe((value) => {
		tes = value;
		console.log(tes); // Sekarang tes akan diperbarui dengan pesan MQTT
	});

	$:console.log(tes)
</script>

<h1>{tes}</h1>
