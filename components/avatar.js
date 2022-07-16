// -- Libs
import { Box, Heading, chakra } from '@chakra-ui/react';
import Image from 'next/image';

const AvatarImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Avatar = ({ thumbnail, title }) => {
  return (
    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align='center'>
      <Box
        w="155px"
        h="200px"
        display="inline-block"
        borderRadius="full"
        overflow="hidden"
      >
        <AvatarImage
          src={thumbnail}
          alt={title}
          borderRadius='full'
          width='155px'
          height='200px'
        />
      </Box>
      <Heading as={'h3'} fontSize={20} mt={3} mb={4} fontWeight='900'>
        {title}
      </Heading>
    </Box>
  )
}

export default Avatar;
