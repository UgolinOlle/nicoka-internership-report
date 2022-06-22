import { Box, Image, Container, Heading, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { NGridItem } from '../components/grid-item';

import thumbWord from '../public/images/word.png'

const Page = () => {
  return (
    <Container>
      <Box borderRadius={"lg"} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} mt={6} p={3} textAlign={"center"}>
        Nicoka - Rapport de stage | Ugolin Ollé | 2022 | Bachelor cycle web et multimédia
      </Box>
      <Section delay={0.3}>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as={"h2"} variant={"page-title"}>
              Nicoka
            </Heading>
            <p>Une application SaaS complète dédiée aux métiers du conseil et du service</p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align='center'>
            <Image maxWidth="100px" display="inline-block" src="/images/nicoka.png" alt="Nicoka logo" />
          </Box>
        </Box>
      </Section>

      <Section delay={0.5}>
        <Heading as={"h3"} variant="section-title">
          😃 Plus précisément, c&apos;est quoi Nicoka ?
        </Heading>
        <Paragraph>
          Une solution évolutive modulaire puissante, agile, intuitive et entièrement paramétrable pour gérer tous les aspects de votre entreprise, automatiser vos processus et vous faire gagner du temps
          Depuis plus de 10 ans, nous mettons notre expertise au service des startups, tpe, pme et des grands groupes
          avec  plus de 10 modules complémentaires entièrement développés, maintenus et hébergés en France.
        </Paragraph>
      </Section>
      <Section delay={0.7}>
        <Heading as={'h3'} variant='section-title'>
          Test grid
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <NGridItem id='word-export' title='Word Export' thumbnail={thumbWord}>
              Export en format Word des différents types de documents
            </NGridItem>
          </Section>
          <Section>
            <NGridItem id='test' title='Test' thumbnail={thumbWord}>
              test descriptioon
            </NGridItem>
          </Section>
          <Section>
            <NGridItem id='test' title='Test' thumbnail={thumbWord}>
              test descriptioon
            </NGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  )
}

export default Page;
