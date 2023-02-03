import { writable, type Writable } from 'svelte/store';

const theme: Writable<string> = writable('light');

export default theme;
