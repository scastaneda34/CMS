import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

import { Badge, Box, Icon, Image } from "@chakra-ui/react"
import { MdShoppingBasket, MdDehaze } from "react-icons/md";


const Navbar = () => {

  const { openCart, openMenu, checkout } = useContext(ShopContext)

  return (
    <Box borderBottom="0.25pt white solid" backgroundColor="#000" display="flex" flexDir="row" p="2rem" justifyContent="space-between" alignItems="center">
      <Icon fill="white" cursor="pointer" onClick={() => openMenu()} as={MdDehaze} w={30} h={30}></Icon>
      <Link to="/"><Image src="https://cdn.shopify.com/s/files/1/0647/4334/2339/files/download.png?v=1655190377&width=90" w={100} h={100}/></Link>
      <Box>
      <Icon fill="white" cursor="pointer" onClick={() => openCart()} as={MdShoppingBasket} w={30} h={30}></Icon>
        <Badge backgroundColor="#FF0000" borderRadius="50%">{checkout?.lineItems?.length}</Badge>
      </Box>
    </Box>
  )
}

export default Navbar

