// src/types/content.ts
import type { PortableTextBlock } from '@portabletext/types';

export type SlugDoc = { slug: string };

export type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  publishedAt?: string;
  excerpt?: string;
};

export type Post = {
  _id: string;
  title: string;
  slug: string;
  publishedAt?: string;
  body?: PortableTextBlock[]; // ✅ correct type
};
