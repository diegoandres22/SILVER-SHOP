
import React, { useState } from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";

export const NaavbarSection2 = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleClick = (item: React.SetStateAction<string>) => {
    setActiveItem(item);
  };

  return (
    <Navbar isBordered className="h-6 hidden sm:flex static ">
      <NavbarContent justify="center" className="m-auto gap-8">
        <NavbarItem isActive={activeItem === 'temporada'}>
          <Link
            color="foreground"
            href="#temporada"
            onClick={() => handleClick('temporada')}
          >
            Temporada
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeItem === 'fragancias'}>
          <Link
            color="foreground"
            href="#fragancias"
            onClick={() => handleClick('fragancias')}
          >
            Fragancias
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeItem === 'ropa'}>
          <Link
            color="foreground"
            href="#ropa"
            onClick={() => handleClick('ropa')}
          >
            Ropa
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeItem === 'accesorios'}>
          <Link
            color="foreground"
            href="#accesorios"
            onClick={() => handleClick('accesorios')}
          >
            Accesorios
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeItem === 'vehiculo'}>
          <Link
            color="foreground"
            href="#vehiculo"
            onClick={() => handleClick('vehiculo')}
          >
            Vehículo
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeItem === 'regalos'}>
          <Link
            color="foreground"
            href="#regalos"
            onClick={() => handleClick('regalos')}
          >
            Regalos
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
