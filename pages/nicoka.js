import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Container, GridItem, Heading, SimpleGrid } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import Section from '../components/section';
import Avatar from '../components/avatar';

// -- Images
import thumbXavier from '../public/images/bust/xavier.png';

const Nicoka = () => {
  return (
    <Container>
      <Section>
        <Heading as={'h3'} fontSize={20} mt={8} mb={4}>
          📝 Rapide coup d&apos;oeil d&apos;Orinea
        </Heading>
        <Section>
          Née en 2009, Orinea est la société qui porte la marque Nicoka. Son fondateur Xavier Vilain a travaillé pendant plus de 10 ans dans le milieu des ERP sur des projets stratégiques pour de grandes multinationales. Nicoka développe alors plusieurs briques métiers indépendantes.
          En 2015, le Groupe Novasco devient actionnaire de la solution. Nicoka opère alors une refonte de sa plateforme et complète la liste de ses modules.
          En 2018, Nicoka s’implante à Angers avec une partie de ses équipes.
        </Section>
      </Section>
      <Heading as={'h3'} fontSize={20} mt={3} mb={4}>
        👋 L&apos;équipe Nicoka
      </Heading>
      <Section>
        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <GridItem>
            <Avatar title='Xavier Vilain' thumbnail={thumbXavier} />
          </GridItem>
          <GridItem>
            <Avatar title='Xavier Vilain' thumbnail={thumbXavier} />
          </GridItem>
          <GridItem>
            <Avatar title='Xavier Vilain' thumbnail={thumbXavier} />
          </GridItem>
        </SimpleGrid>
      </Section>
      <Box align='center' my={4}>
        <NextLink href='https://trial.nicoka.com' passHref scroll={false}>
          <Button _hover={{ bg: '#cc9c0c' }} bg='#fdc500' rightIcon={<ChevronRightIcon />} colorScheme='teal'>
            On vous à préparez un trial pour tester l&apos;outil !
          </Button>
        </NextLink>
      </Box>
    </Container >
  )
}

export default Nicoka;
