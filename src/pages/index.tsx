import { useAllPostsQuery } from 'generated/graphql';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
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

  const posts = data?.posts?.nodes;
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        {/* <Posts /> */}
        <i>Querying Wordpress:</i> {JSON.stringify(posts)}
      </main>
    </Layout>
  );
}
