import { Container, Badge, Link, List, ListItem, Heading } from '@chakra-ui/react';
import { Title, WorkImage, Meta } from '../../components/work';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import Section from '../../components/section';

const Work = () => {
  return (
    <Layout title='Export Word'>
      <Container mt={4} >
        <Title>
          Export Word
        </Title>
        <WorkImage src={'../images/word.png'} alt='Word illustration' />
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Office 365</Meta>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>PHP</span>
          </ListItem>
          <ListItem>
            <Meta>Librairie</Meta>
            <span>PHPWord</span>
          </ListItem>
        </List>
        <Section delay={0.1}>
          <Heading variant='section-title' as='h2'>
            💡 Le but de la feature
          </Heading>
          <Paragraph>
            L’export en word à pour but de faciliter aux clients le type de document qu’ils souhaitent récupérer.
            En format Word, ils pourront remodifier en cas d’erreur ou ajouter certains éléments qui ne peuvent pas être ajoutés à partir de Nicoka.
          </Paragraph>
          <Paragraph>
            Je suis donc partie sur la création d’un objet (POO) pour créer la base de la feature et de là j’y ai ajouter mes briques pour venir parser les différents type de documents.
            Il me fallait une brique pour le header, le footer et le body.
            J’y ai ajouté une brique pour pouvoir lire les tableaux.
          </Paragraph>
          <WorkImage src={'../images/word-import-illu.png'} alt='Word import illustration' />
        </Section>
        <Section delay={0.2}>
          <Heading variant='section-title' as='h3'>
            🪫 Mes difficultés
          </Heading>
          <Paragraph>
            Ma plus grande difficulté était de savoir comme j’allais réussir à renvoyer les données après avoir parser un document dans le word pour avoir un document identique aux documents lorsqu’ils sont exportés sous format Pdf.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Work

