// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import icon from 'astro-icon';
import tina from '@tinacms/astro/integration';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL || `https://${process.env.VERCEL_URL}`,
	output: 'server',
	adapter: node({ mode: 'standalone' }),
	redirects: {
		'/admin': '/admin/index.html',
	},
	integrations: [mdx(), sitemap(), icon(), tina()],
});
