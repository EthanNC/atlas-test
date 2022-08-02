import { useAllPostsQuery } from 'generated/graphql';
import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const { data } = useAllPostsQuery({
    onCompleted: () => {
      return true;
    },
  });

  // const posts = data?.posts?.nodes;

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='flex flex-col items-center justify-center gap-3'>
          {/* <Posts /> */}
          {/* <i>Querying Wordpress:</i> {JSON.stringify(posts)} */}
          <h1>Blog Posts</h1>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
            {data?.posts?.nodes?.map((post) => {
              // if (!search) return true
              return (
                <article className='card glass' key={post?.title}>
                  <figure className='image-full'>
                    <Image
                      // useSkeleton
                      src={post?.featuredImage?.node?.mediaItemUrl as string}
                      width={
                        post?.featuredImage?.node?.mediaDetails?.width as number
                      }
                      height={
                        post?.featuredImage?.node?.mediaDetails
                          ?.height as number
                      }
                      alt='featured image'
                    />
                  </figure>
                  <div className='card-body'>
                    <title className='card-title'> {post?.title} </title>
                    <div className='card-actions text-xs uppercase'>
                      <UnderlineLink href='/'>Read More</UnderlineLink>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
}
