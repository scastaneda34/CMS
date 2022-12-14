import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image, Center } from "@chakra-ui/react"
import { ShopContext } from '../context/shopContext'
import Hero from '../components/Hero'
import RichText from '../components/RichText'
import ImageWithText from '../components/ImageWithText'


const HomePage = () => {

  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
    return () => {

    }
  }, [fetchAllProducts])


  if (!products) return <div>loading...</div>

  return (
    <Box>
      
      <Grid templateColumns={['repeat(1fr)', 'repeat(3, 1fr)']}>
        {products.map(product => (
          <Link to={`/products/${product.handle}`} key={product.id} >
            <Box _hover={{ opacity: '80%' }} textAlign="center" position="relative">
              <Center>
              <Image
                src={product.images[0].src}
              />
              </Center>
              <Box>
              <Box fontWeight="bold" position="relative" bottom="15%" w="100%">{product.title}</Box>
              <Box color="red" position="relative" bottom="5%" w="100%">${product.variants[0].price}</Box>
            </Box>
            </Box>
            
          </Link>
        ))}
      </Grid>
      
    </Box>
  )
}

export default HomePage
