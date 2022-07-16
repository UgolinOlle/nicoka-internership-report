import NextLink from 'next/link'
import {
  Box,
  Heading,
  Container,
  Button,
  Divider,
  Text
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container pt={14}>
      <Heading as={'h1'}>Page introuvable</Heading>
      <Text>La page que vous cherchez est introuvable</Text>
      <Divider my={6} />
      <Box align='center' my={6}>
        <NextLink href={'/'}>
          <Button bg={'#fdc500'} _hover={{ bg: '#cc9c0c' }} >Retour à la page d&apos;Accueil</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound;
