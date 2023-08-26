import { UrqlProvider, ssrExchange, cacheExchange, fetchExchange, createClient } from '@urql/next';
import { devtoolsExchange } from '@urql/devtools';

const ssr = ssrExchange();

const client = createClient({
  url: 'http://localhost:4000',
  exchanges: [cacheExchange, ssr, fetchExchange, devtoolsExchange],
});


export default function DefaultUrqlProvider({ children }: React.PropsWithChildren) {
  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
}