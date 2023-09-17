import { writable } from 'svelte/store';

const mqttData = writable(null);

export default mqttData;