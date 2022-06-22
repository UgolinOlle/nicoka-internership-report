import { Text, Box, Stack } from '@chakra-ui/react'
import { Global } from '@emotion/react';

const Card = ({ title, thumbnail }) => {
  return (
    <Box backgroundImage={`url(/images/${thumbnail})`} bgPosition='center'
      bgRepeat="no-repeat" h='300px' w='200px' rounded='20px'>
      <Stack align='left' m={{ base: 5 }}>
        <Text as={'h2'} variant={'second-title'} mt={5}>
          {title}
        </Text>
      </Stack>
    </Box >
  )
}

export default Card;

export const GridItemStyle = () => {
  <Global
    styles={`
    .grid-item-thumbnail {
border-radius: 12px
}
`} />
}
