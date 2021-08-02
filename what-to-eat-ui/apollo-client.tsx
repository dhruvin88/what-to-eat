import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Keys from "./config";

const httpLink = createHttpLink({
    uri: 'https://api.yelp.com/v3/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    const token = Keys.YELP_APIKEY;
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    
});

export default client;