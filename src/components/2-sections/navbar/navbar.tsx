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
} from "@heroui/react";
import { IconHeadset, IconSearch, IconShoppingCart } from '@tabler/icons-react';

export const Naavbar = () => {

  return (
    <Navbar isBordered>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <strong>
            Silver Shop
          </strong>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex pr-3" justify="start">
        <NavbarBrand>
          <strong>
            Silver Shop
          </strong>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className=" gap-4" justify="center">
        <Input startContent={<IconSearch stroke={1} />} placeholder="Buscar" type='search' isClearable />
      </NavbarContent>

      <NavbarContent justify="end" className='hidden sm:flex'>
        <NavbarItem >
          <IconShoppingCart stroke={2} />
        </NavbarItem>
        <NavbarItem>
          <IconHeadset stroke={2} />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
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
