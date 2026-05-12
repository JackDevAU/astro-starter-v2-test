import { requestWithMetadata } from '@tinacms/astro';
import client from '../../tina/__generated__/client';

export const getPage = (relativePath: string) =>
	requestWithMetadata(client.queries.page({ relativePath }));

export const getBlogPost = (relativePath: string) =>
	requestWithMetadata(client.queries.blog({ relativePath }));

export const getGlobalConfig = () =>
	requestWithMetadata(client.queries.config({ relativePath: 'config.json' }));
