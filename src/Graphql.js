import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

const API_URL = 'https://dev-f-netflix-api.herokuapp.com';
const httpLink = createHttpLink({
    uri: `${API_URL}/graphql`,
    credentials: "include"
});

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('netflixToken');
    return {
        headers: {
            ...headers,
            authorization: token ? `JWT ${token}` : ''
        }
    }
});

export default new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});
