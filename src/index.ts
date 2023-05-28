import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const port = process.env.PORT ? Number.parseInt(process.env.PORT) : 4000;

async function startServer() {
    // Passing an ApolloServer instance to the `startStandaloneServer` function:
    //  1. creates an Express app
    //  2. installs your ApolloServer instance as middleware
    //  3. prepares your app to handle incoming requests
    const {url} = await startStandaloneServer(server, {
        listen: {port: port},
    });

    console.log(`🚀  Server ready at: ${url}`);
}

startServer();
