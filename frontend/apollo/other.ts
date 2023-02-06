import { defineApolloClient } from '@nuxtjs/apollo'
export default defineApolloClient({
  httpEndpoint: 'https://walrus-app-sbjbt.ondigitalocean.app/graphql',
  browserHttpEndpoint: '',
  wsEndpoint: '',
  httpLinkOptions: {},
  wsLinkOptions: {},
  wsEndpoint: '',
  websocketsOnly: false,
  connectToDevTools: false,
  defaultOptions: {},
  inMemoryCacheOptions: {},
  tokenName: 'apollo:<client-name>.token',
  tokenStorage: 'cookie',
  authType: 'Bearer',
  authHeader: 'Authorization'
})