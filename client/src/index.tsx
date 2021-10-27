import { render } from 'react-dom';
import { App } from "./App";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:8081/graphql',
    cache: new InMemoryCache()
});

render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('app'),
);