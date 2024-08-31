import "../styles/globals.css";
import type { Metadata } from "next";
import ApolloProviderWrapper from "../components/ApolloProviderWrapper";

export const metadata: Metadata = {
  title: "Books Store",
  description: "Books Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ApolloProviderWrapper>{children}</ApolloProviderWrapper>
      </body>
    </html>
  );
}
