import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Text, Image, VStack } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box backgroundColor="#000">
      <Grid templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]} color="white" fontWeight='bold'>
        <Image src="https://cdn.shopify.com/s/files/1/0647/4334/2339/files/download.png?v=1655190377&width=360" />
        <VStack p="2rem">
          <Link to="/products/pink-pendant-uber-jason-fof">Jason Pink Pendant</Link>
          <Link to="/products/cannibal-pin">Cannibal Pin</Link>
          <Link to="/products/silver-pendant-uber-jason-fof">Jason Silver Pendant</Link>
        </VStack>
        
      </Grid>
      <Box>
        <Text textAlign="center" color="white" w="100%" borderTop="1px solid white" p="1rem">
          © Copyright Fear of Fitteds
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
