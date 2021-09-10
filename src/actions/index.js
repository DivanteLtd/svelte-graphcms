import { envs } from '$lib/envVariables.js';
import { language } from '$stores';
import { get } from 'svelte/store';
import { GraphQLClient } from 'graphql-request';
import { GET_PAGE, GET_POSTS, GET_POST } from '$lib/graphql/queries.js';

const graphcms = new GraphQLClient(envs.gcms);

const getPage = async (slug) => {
	const data = await graphcms.request(GET_PAGE, { slug: slug, language: [get(language)] });
	return {
		props: {
			page: data.page
		}
	};
};

const getPosts = async () => {
	return await graphcms.request(GET_POSTS, { language: [get(language)] });
};

const getPost = async (slug) => {
	return await graphcms.request(GET_POST, { slug: slug, language: [get(language)] });
};

export { getPage, getPosts, getPost };
