import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

import { useApollo } from '@/context/apollo';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(
    pageProps.initialApolloState as NormalizedCacheObject
  );

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
