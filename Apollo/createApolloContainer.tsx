import React from 'react'
import { ReactNode } from 'react'
import { InMemoryCache } from 'apollo-boost'
import { HttpLink } from 'apollo-boost'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const cache = new InMemoryCache()

const link = new HttpLink({
    uri: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev'
})

let client = new ApolloClient({
    cache,
    link
})

export function createApolloContainer(children: ReactNode) {
    return <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
}
