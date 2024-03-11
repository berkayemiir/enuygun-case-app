"use client";

import styled from "styled-components";
import StyledComponentsRegistry from "./registry";
import Nav from "../components/nav";
import { Open_Sans } from "next/font/google";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apolloClient";

const openSans = Open_Sans({ subsets: ["latin"] });

const Body = styled.body`
  margin: 0;
  * {
    box-sizing: border-box;
    font-family: ${openSans.style.fontFamily};
  }
`;

const Content = styled.div`
  height: 100vh;
  padding: 20px;

  @media only screen and (min-width: 991px) {
    display: flex;
    gap: 50px;
  }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Personel Oylama Sistemi</title>
      </head>
      <ApolloProvider client={client}>
        <StyledComponentsRegistry>
          <Body>
            <Content>
              <Nav></Nav>
              <div style={{ width: "100%" }}>{children}</div>
            </Content>
          </Body>
        </StyledComponentsRegistry>
      </ApolloProvider>
    </html>
  );
}
