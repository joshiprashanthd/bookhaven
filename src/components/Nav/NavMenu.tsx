"use client"

import { UserIcon } from "@/icons/UserIcon"
import { IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react"
import { Link } from "@chakra-ui/next-js"
import { MenuIcon } from "@/icons/MenuIcon"
import { LibraryIcon } from "@/icons/LibraryIcon"
import { LogoutIcon } from "@/icons/LogoutIcon"

export const NavMenu = () => {
    return (
        <Menu>
            <MenuButton as={IconButton} icon={<MenuIcon />} size="icon"></MenuButton>
            <MenuList borderRadius={8} fontSize={14} minW="40">
                <MenuItem
                    as={Link}
                    href="/profile"
                    _hover={{ textDecoration: "none" }}
                    icon={<UserIcon size={18} />}
                >
                    Your Profile
                </MenuItem>
                <MenuItem
                    as={Link}
                    href="/library"
                    _hover={{ textDecoration: "none" }}
                    icon={<LibraryIcon size={18} />}
                >
                    Your Library
                </MenuItem>
                <MenuDivider />
                <MenuItem icon={<LogoutIcon size={18} />}> Logout </MenuItem>
            </MenuList>
        </Menu>
    )
}
