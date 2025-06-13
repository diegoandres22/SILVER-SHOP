import React from 'react'
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";

export const DropdownUser = () => {
  return (
    <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="default"
              size="sm"
              src="https://avatars.githubusercontent.com/u/30373425?v=4"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
           
            <DropdownItem key="settings">Ajustes</DropdownItem>
            <DropdownItem key="team_settings">Mis compras</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
  )
}
