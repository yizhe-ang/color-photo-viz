// import adapter from '@sveltejs/adapter-auto';
import adapter from 'svelte-adapter-github';
import { preprocessThrelte } from '@threlte/preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: preprocessThrelte(),
  paths: {
		base: dev ? '' : '/color-photo-viz'
	}
};

export default config;
