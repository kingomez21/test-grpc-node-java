import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"
import {createUsuario, getUsuarios} from "./grpc-client"

const typeDefs = `
    type Query {
        users: [User]
    }

    type Mutation {
        createUser(newUser: UserInput): Response
    }

    input UserInput {
        firstname: String 
        lastname: String
        email: String
        address: String
    }

    type Response {
        msg: String
        status: Boolean
    }

    type User {
        id: ID
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
    },

    Mutation: {
        createUser: async(parent, {newUser}) => {
            console.log(newUser)
            const {msg, status} = await createUsuario(newUser.firstname, newUser.lastname, newUser.email, newUser.address)

            return {msg, status}
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
    console.log(url)
}

main()