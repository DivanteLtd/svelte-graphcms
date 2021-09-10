/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel';
import { resolve } from 'path';
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$components: resolve('./src/components'),
					$stores: resolve('./src/stores'),
					$actions: resolve('./src/actions')
				}
			}
		},
		adapter: vercel({ out: 'my-output-directory' })
	}
};

export default config;
