import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

// -- Files
import { Title, WorkImage, Meta } from '../../components/work';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title='Export Word'>
      <Container>
        <Title>
          Export Word
        </Title>
        <WorkImage src={'../images/word.png'} alt='Word illustration' />
        <Paragraph>
          Random paragraph
        </Paragraph>
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
      </Container>
    </Layout>
  )
}

export default Work

