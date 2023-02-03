import { writable, type Writable } from 'svelte/store';

const theme: Writable<string> = writable('dark');

export default theme;
