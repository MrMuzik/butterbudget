import { sveltekit } from '@sveltejs/kit/vite';
import process from 'node:process';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
		  // Proxy /api requests to the API backend using environment variable
		  '/api': {
			target: process.env.VITE_API_BASE_URL || 'https://butterbudget.deno.dev/',
			changeOrigin: true,
			secure: false,
			rewrite: (path) => path.replace(/^\/api/, '') // Optional: Rewrite path if needed
		  }
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
