import { gql } from 'graphql-request';

const GET_PAGES = gql`
	query getPagesQuery($language: [Locale!]!) {
		pages(locales: $language) {
			id
			slug
			title
		}
	}
`;
const GET_PAGE = gql`
	query getPageQuery($slug: String!, $language: [Locale!]!) {
		page(locales: $language, where: { slug: $slug }) {
			pageBlocks {
				__typename
				... on QuoteBlock {
					id
					quote
					author
				}
				__typename
				... on PostBlock {
					id
					title
				}
				__typename
				... on ContentBlock {
					id
					title
					content {
						html
					}
					image {
						url
						fileName
					}
				}
				__typename
				... on CarouselBlock {
					id
					title
					images {
						fileName
						url
					}
				}
				__typename
				... on Form {
					id
					cta
					formName
					fields {
						__typename
						... on FormInput {
							id
							name
							label
							placeholder
							type
							required
						}
					}
				}
				... on ChartBlock {
					id
					percentage
					chartLabel
					chartType
					chartDataset {
						__typename
						... on ChartBlockDataset {
							value
							color {
								css
							}
							label
						}
					}
				}
			}
			title
			slug
		}
	}
`;

const GET_POSTS = gql`
	query getPostsQuery($language: [Locale!]!) {
		postBlocks(locales: $language) {
			id
			slug
			title
			createdAt
			content {
				html
			}
			coverImage {
				id
				url
			}
		}
	}
`;

const GET_POST = gql`
	query getPostQuery($slug: String!, $language: [Locale!]!) {
		postBlock(locales: $language, where: { slug: $slug }) {
			id
			title
			publishedAt
			content {
				html
			}
			coverImage {
				url
			}
		}
	}
`;
export { GET_PAGES, GET_PAGE, GET_POSTS, GET_POST };
