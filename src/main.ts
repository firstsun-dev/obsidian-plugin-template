import { Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {
	async onload() {
		console.log('loading plugin');
	}

	async onunload() {
		console.log('unloading plugin');
	}
}

// CI verification only (firstsun-dev/.github#42); do not merge
