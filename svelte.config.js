import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Switch to Netlify adapter for full serverless support
		adapter: adapter({
			// Enables edge functions for better performance
			edge: false,
			// Enable split if you're using Netlify functions
			split: false
		}),
		prerender: {
		  // Ensure the app can handle dynamic routing correctly
		  handleMissingId: 'warn',
		},
		paths: {
		  // If Netlify is hosting on a subdirectory, adjust the base path here
		  base: process.env.NODE_ENV === 'production' ? '' : ''
		},
		alias: {
		  $lib: 'src/lib'
		}
	}
};

export default config;
