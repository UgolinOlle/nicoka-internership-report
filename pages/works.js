import { SimpleGrid, Container, Box, Heading, useColorModeValue } from '@chakra-ui/react';
import Card from '../components/card';
import Section from '../components/section';

const Works = () => {
  return (
    <Container>
      <Heading as={'h3'} fontSize={20} mt={3} mb={4}>
        💻 Mes différents travaux
      </Heading>
      <Box borderRadius={'lg'} bg={useColorModeValue('whiteAlpha.500', 'whatsapp.200')} w={'100%'} align='center'>
        Voici la présentation des différents travaux réalisés
      </Box>
      <SimpleGrid column={[1, 1, 1]} gap={6}>
        <Section>
          <Card id='word-export' title='Word exportation' thumbnail='word.png'>
            Word Export
          </Card>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works;
