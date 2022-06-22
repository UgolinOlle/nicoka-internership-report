import Head from "next/head";
import Navbar from "../navbar"
import {Box, Container} from "@chakra-ui/react"

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device, initial-scale=1"/>
                <title>Nicoka - Rapport de stage</title>
            </Head>

            <Navbar path={router.asPath}/>

            <Container maxW={"container.md"} pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main;