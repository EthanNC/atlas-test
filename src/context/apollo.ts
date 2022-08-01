import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;

// interface ClientOptions {
//   headers?: Record<string, string>;
//   initialState?: Record<string, ApolloClient<NormalizedCacheObject>>;
// }

const uri = 'https://midichlorian.wpengine.com/graphql';

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({ uri: uri, credentials: 'same-origin' }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === 'undefined') return _apolloClient;
  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
