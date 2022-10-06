import React from 'react'
import { Box, Button, Text, Image, Center } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <Box backgroundColor="#000" w="100%" position="relative" h="10vh">
      <Image className="fade-in" h="50%" m="auto" objectFit="contain" objectPosition={['top', 'center']} src="" />
      <Text className="tracking-in-expand-fwd" position="absolute" bottom="20%" w="100%" textAlign="center" color="white" fontWeight="bold" fontSize="4rem">
        
      </Text>
      <Center>
        <Button w="10rem" backgroundColor="#fff" color="black" _hover={{ opacity: '70%' }} position="absolute" bottom="10%">
        <Link to="/ProductPage">Shop Now</Link>
        </Button>
      </Center>
    </Box>
  )
}

export default Hero
