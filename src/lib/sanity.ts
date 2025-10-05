import { createClient } from '@sanity/client';

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || 'production';
const apiVersion = import.meta.env.SANITY_API_VERSION || '2023-10-01';
const token = import.meta.env.SANITY_READ_TOKEN; // optional

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token
});

export const blogListQuery = `*[_type == "post"] | order(publishedAt desc){
  _id, title, "slug": slug.current, publishedAt, excerpt
}`;

export const blogPostQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id, title, publishedAt, body
}`;
