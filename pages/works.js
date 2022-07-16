// -- Libs
import { Divider, Container, Box, Heading, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';

// -- Files
import { WorkGridItem } from '../components/grid';
import Layout from '../components/layouts/article';

// -- Images
import thumbWord from '../public/images/word.png';
import thumbGrafana from '../public/images/grafana-cloud-meta.jpg';

const Works = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius={"lg"} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} mt={6} p={3} textAlign={"center"}>
          Voici la liste des différents travaux que j&apos;ai réalisé durant mon stage.
        </Box>

        <Heading as={'h3'} fontSize={20} mt={4} mb={4}>
          💻  Mes différents travaux
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="word-export" title="Export Word" thumbnail={thumbWord}>
              Création de la features Export word pour tout les documents de Nicoka (facture, devis, etc).
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="word-import"
              title="Import Word"
              thumbnail={thumbGrafana}
            >
              Monitoring avec Grafana
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="Word"
              title="The four painters"
              thumbnail={thumbWord}
            >
              A video work generated with deep learning, imitating famous four
              painters like Van Gogh
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="word" thumbnail={thumbWord} title="Word">
              An app that suggests ramen(noodle) shops based on a given photo of
              the ramen you want to eat
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>
      </Container>
    </Layout >
  )
}

export default Works;
