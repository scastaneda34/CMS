import React from 'react'
import { Box, Button, Text, Image, Center } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <Box backgroundColor="#000" w="100%" position="relative" h="70vh">
      <Image className="fade-in" h="100%" m="auto" objectFit="contain" objectPosition={['top', 'center']} src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851.jpg" />
      <Text className="tracking-in-expand-fwd" position="absolute" bottom="20%" w="100%" textAlign="center" color="white" fontWeight="bold" fontSize="4rem">
        Introducing Bath Bombs
      </Text>
      <Center>
        <Button w="10rem" backgroundColor="#fff" color="black" _hover={{ opacity: '70%' }} position="absolute" bottom="10%">
        <Link to="/collections">Shop Now</Link>
        </Button>
      </Center>
    </Box>
  )
}

export default Hero
