import type { IslandRegistry } from '@tinacms/astro/experimental';
import PageBody from '../components/PageBody.astro';
import BlogPostBody from '../components/BlogPostBody.astro';
import { getPage, getBlogPost } from './data';

const MAIN_WRAPPER = { tag: 'div', className: 'tina-island-main' };
const ARTICLE_WRAPPER = { tag: 'article', className: 'tina-island-article' };

export const islands: IslandRegistry = {
	page: {
		fetch: (_request, params) => getPage(params.get('relativePath') ?? ''),
		component: PageBody,
		wrapper: MAIN_WRAPPER,
		propsFromData: (result) => ({
			data: (result as { data?: { page?: unknown } }).data?.page,
		}),
	},
	blogPost: {
		fetch: (_request, params) => getBlogPost(params.get('relativePath') ?? ''),
		component: BlogPostBody,
		wrapper: ARTICLE_WRAPPER,
		propsFromData: (result) => ({
			data: (result as { data?: { blog?: unknown } }).data?.blog,
		}),
	},
};
