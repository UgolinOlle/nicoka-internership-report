import NextLink from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { Box, Text, LinkBox, useColorModeValue, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const IconGridItem = ({ link, title, icon, hoverColor }) => (
  <Box w='100%' textAlign='center' _hover={{ color: hoverColor }} transition='0.5s ease'>
    <NextLink href={link} passHref scroll={false} >
      <LinkBox cursor='pointer' mt={4} >
        <FontAwesomeIcon icon={icon} color={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} fontSize={40} />
        <LinkOverlay href={link}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
      </LinkBox>
    </NextLink>
  </Box>
)


export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
