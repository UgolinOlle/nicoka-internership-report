import { Box, Heading } from '@chakra-ui/react';
import Image from 'next/image';

export const Avatar = ({ thumbnail, title }) => (
  <Box w='100%' textAlign='center'>
    <Image
      src={thumbnail}
      alt={title}
      placeholder="blur"
      loading="lazy"
      width='150px'
      height='200px'
    />
    <Heading as={'h3'} fontSize={20} mt={3} mb={4} fontWeight='900'>
      {title}
    </Heading>
  </Box>
)
