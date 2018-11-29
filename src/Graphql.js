import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const API_URL = 'https://dev-f-netflix-api.herokuapp.com';
const httpLink = createHttpLink({
    uri: `${API_URL}/graphql`,
    credentials: "include"
});

export default new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});
