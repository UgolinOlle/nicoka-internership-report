import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import React from 'react';

import { GridItemStyle } from '../grid';
import Footer from '../footer';
import Navbar from "../navbar";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device, initial-scale=1" />
        <title>Nicoka - Rapport de stage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
        <GridItemStyle />
      </Container>
    </Box>
  )
}

export default Main;
