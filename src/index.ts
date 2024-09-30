import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"
import {getUsuarios} from "./grpc-client"

const typeDefs = `
    type Query {
        users: [User]
    }

    type User {
        firstname: String 
        lastname: String
        email: String
        address: String
    }
`

const resolvers = {
    Query: {
        users: async() => {
            return (await getUsuarios()).users
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const main = async() => {
    const {url} = await startStandaloneServer(server, {
        listen: {
            port: 4000
        }
    })
    console.log("server on port 4000"+url)
}

main()