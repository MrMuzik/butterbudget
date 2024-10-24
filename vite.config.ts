import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			// Proxy requests to the backend (Deno)
			'/api': {
				// Use environment variable for backend URL, defaulting to localhost:8000
				target: process.env.VITE_API_BASE_URL || 'http://localhost:8000',
				changeOrigin: true,
				secure: true,
			},
		},
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
