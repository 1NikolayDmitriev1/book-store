import type { AppProps } from "next/app";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

// const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

// const fetchBooks = async (query: string) => {
//   const response = await fetch(
//     `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
//   );
//   const data = await response.json();
//   return data;
// };
