import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Button,
} from "@heroui/react";
import { Image } from "@heroui/image";
import { IconHeadset, IconSearch, IconShoppingCart } from '@tabler/icons-react';
import { DropdownUser } from '@/components/3-elements';


export const NaavbarSection = () => {

  return (
    <Navbar isBordered>

      <NavbarContent className="sm:hidden max-w-14 " justify="start">
        <NavbarBrand>

          <Image
            src="./Isologosilvershop.png"
            width={50}
            height={50}
            alt="Marca del sitio"
            className='cursor-pointer'
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarBrand>
          <Image
            src="./LOGOSILVER SHOP.png"
            width={140}
            height={50}
            alt="Marca del sitio"
            className='cursor-pointer'

          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center">
        <Input startContent={<IconSearch stroke={1} />} placeholder="Buscar" type='search' isClearable />
      </NavbarContent>

      <NavbarContent justify="end" className='hidden sm:flex'>
        <NavbarItem >
          {/* <IconShoppingCart stroke={2} /> */}
          <Button isIconOnly aria-label="Carrito de compras" variant="light" >
            <IconShoppingCart stroke={2} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly aria-label="Contactar" variant="light" >
            <IconHeadset stroke={2} />
          </Button>
        </NavbarItem>
        <DropdownUser></DropdownUser>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className='items-center justify-center'>
        <NavbarMenuItem key={0}>
          <Link className=" cursor-pointer" size="lg"  >
            Contactar
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
