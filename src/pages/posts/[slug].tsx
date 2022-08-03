import {
  AllPostsDocument,
  Post,
  SinglePostDocument,
  useSinglePostQuery,
} from 'generated/graphql';
import DOMPurify from 'isomorphic-dompurify';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { initializeApollo } from '@/context/apollo';

function PostPage() {
  const router = useRouter();
  // const locale_slug = String(router.query.locale);
  const slug = String(router.query.slug);

  const { data } = useSinglePostQuery({
    variables: {
      slug,
    },
  });
  const post = data?.post;

  //NOTE: Might not need to sanatize content
  const cleanedContent = DOMPurify.sanitize(post?.content as string);
  return (
    <Layout>
      <Seo templateTitle={post?.title as string} />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <h1>{post?.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: cleanedContent,
              }}
            ></div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: AllPostsDocument,
  });
  const paths = data.posts.nodes.map((post: Post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug);
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: SinglePostDocument,
    variables: {
      slug,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      revalidate: 600,
    },
  };
};

export default PostPage;
