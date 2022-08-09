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


  if (!products) return <div>loading..</div>

  return (
    <Box>
      
    </Box>
  )
}

export default HomePage
