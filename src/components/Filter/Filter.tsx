"use client"

import { ChevronDown } from "@/icons/ChevronDown"
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

export const Filter = ({ name, options }: { name: string; options: string[] }) => {
    const [selected, setSelected] = useState<string>(name)

    useEffect(() => {}, [selected])

    return (
        <Menu>
            <MenuButton as={Button} borderRadius={16} rightIcon={<ChevronDown />} h="12">
                {selected}
            </MenuButton>
            <MenuList borderRadius={16} border="gray.400" bg="gray.100">
                {options.map((item) => (
                    <MenuItem
                        onClick={() => setSelected(item)}
                        bg="gray.100"
                        _hover={{
                            bg: "gray.50",
                        }}
                    >
                        {item}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}
