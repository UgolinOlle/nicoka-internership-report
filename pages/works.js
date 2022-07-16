// -- Libs
import { Divider, Container, Box, Heading, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';

// -- Files
import { WorkGridItem } from '../components/grid';
import Layout from '../components/layouts/article';

// -- Images
import thumbWord from '../public/images/word.png';
import thumbGrafana from '../public/images/grafana-cloud-meta.jpg';
// import thumbAutoNico from '../public/images/auto.png';

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as={'h3'} fontSize={20} mt={4} mb={4}>
          💻  Mes différents travaux
        </Heading>

        <Box borderRadius={"lg"} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} mt={6} p={3} textAlign={"center"}>
          Voici la liste des différents travaux que j&apos;ai réalisé durant mon stage.
        </Box>

        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id='word' title='Word export' thumbnail={thumbWord}>
              Export sous format word
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id='grafana' title='Grafana' thumbnail={thumbGrafana}>
              Monitoring avec Grafana
            </WorkGridItem>
          </Section>

          <Section delay={0.2}>
            <Divider my={6} />

            <Heading as="h3" fontSize={20} mb={4}>
              Collaborations
            </Heading>
          </Section>

        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works;
