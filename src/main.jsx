import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client'
import { ALL_AUTHORS } from './queries.js'
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})
// const query = ALL_AUTHORS
// client.query({query}).then((response)=>console.log(response.data))
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
