import { describe, expect, it } from 'vitest';


describe('MyPlugin', () => {
	it('exposes a Plugin subclass with lifecycle hooks', async () => {
		const { default: MyPlugin } = await import('../src/main');
		const p = new MyPlugin();
		expect(typeof p.onload).toBe('function');
		expect(typeof p.onunload).toBe('function');
	});
});
