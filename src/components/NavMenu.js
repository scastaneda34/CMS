import React, { useContext } from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  VStack
} from "@chakra-ui/react"

import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'


const NavMenu = () => {

  const { isMenuOpen, closeMenu } = useContext(ShopContext)

  return (
    <>
      <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack p="2rem">
              <Link to="/products/pink-pendant-uber-jason-fof">Jason Pink Pendant</Link>
              <Link to="/products/cannibal-pin">Cannibal Pin</Link>
              <Link to="/products/silver-pendant-uber-jason-fof">Jason Silver Pendant</Link>
              </VStack>
            </DrawerBody>
            <DrawerFooter textAlign="center">
              <Text w="100%">© Copyright Fear of Fitteds</Text>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default NavMenu
