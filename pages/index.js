import { Box, Image, Container, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { faBarcode, faBug, faBullseye, faCrosshairs, faDollar, faRocket, faShoppingCart, faUsers } from '@fortawesome/free-solid-svg-icons'

import Section from '../components/section';
import Paragraph from '../components/paragraph';
import Layout from '../components/layouts/article';
import { IconGridItem } from '../components/grid';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius={"lg"} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} mt={6} p={3} textAlign={"center"}>
          Nicoka - Rapport de stage | Ugolin Ollé | 2022 | Bachelor cycle web et multimédia
        </Box>
        <Section>
          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              <Heading as={"h2"} variant={"page-title"}>
                Nicoka
              </Heading>
              <p>Une application SaaS complète dédiée aux métiers du conseil et du service</p>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              align='center'>
              <Image maxWidth="100px" display="inline-block" src="/images/nicoka.png" alt="Nicoka logo" />
            </Box>
          </Box>
        </Section>
        <Section delay={0.1}>
          <Heading as={"h3"} variant="section-title">
            😃 Plus précisément, c&apos;est quoi Nicoka ?
          </Heading>
          <Paragraph>
            Une solution évolutive modulaire puissante, agile, intuitive et entièrement paramétrable pour gérer tous les aspects de votre entreprise, automatiser vos processus et vous faire gagner du temps
            Depuis plus de 10 ans, nous mettons notre expertise au service des startups, tpe, pme et des grands groupes
            avec  plus de 10 modules complémentaires entièrement développés, maintenus et hébergés en France.
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading as={'h3'} variant='section-title'>
            🧱 Les logiciels de Nicoka
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <IconGridItem title='SIRH - RH' icon={faUsers} link='https://sirh.nicoka.com/' hoverColor='#31b7ca' />
            </Section>
            <Section>
              <IconGridItem title='ATS - Recrutement' icon={faCrosshairs} link='https://recrutement.nicoka.com/' />
            </Section>
            <Section>
              <IconGridItem title='DESK - Service Client' icon={faBug} link='https://www.nicoka.com/#HomePage Suite Nicoka Nicoka_DESK' />
            </Section>
            <Section>
              <IconGridItem title='CRM - Relation Client' icon={faBullseye} link='https://crm.nicoka.com/' />
            </Section>
            <Section>
              <IconGridItem title='Projet' icon={faRocket} link='https://www.nicoka.com/#HomePage Suite Nicoka Nicoka_Projets' />
            </Section>
            <Section>
              <IconGridItem title='Ventes' icon={faDollar} link='https://www.nicoka.com/gestion-des-devis' />
            </Section>
            <Section>
              <IconGridItem title='Achats' icon={faShoppingCart} link='https://www.nicoka.com/gerez-vos-commandes-d-achat' />
            </Section>
            <Section>
              <IconGridItem title='Démat' icon={faBarcode} link='https://www.nicoka.com/solutions/gerez-vos-achats/dematerialisez-vos-factures-d-achat/' />
            </Section>
          </SimpleGrid>
        </Section>
      </Container >
    </Layout >
  )
}

export default Page;
