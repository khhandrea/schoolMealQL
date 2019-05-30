import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";


const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true
})

// server.start(() => console.log("Graphql server running on localhost:4000"));

module.exports = server.createHandler();