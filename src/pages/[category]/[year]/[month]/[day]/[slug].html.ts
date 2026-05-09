import { getCollection } from 'astro:content';
import { getBlogSlug, getLegacyBlogParams } from '../../../../../utils/routes';
import { renderRedirectHtml } from '../../../../../utils/redirect';

export async function getStaticPaths() {
  const posts = await getCollection('posts');
  return posts.flatMap((entry) => getLegacyBlogParams(entry.id, entry.data.categories)
    .filter((params) => params.category)
    .map((params) => ({
      params,
      props: { target: `${import.meta.env.BASE_URL}blog/${getBlogSlug(entry.id)}` },
    })));
}

export async function GET({ props }: { props: { target: string } }) {
  return new Response(renderRedirectHtml(props.target), {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
