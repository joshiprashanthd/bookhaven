"use client"

import { ChevronDown } from "@/icons/ChevronDown"
import { Button, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react"

export const GenreFilter = ({
    genre,
    setGenre,
}: {
    genre: string
    setGenre: (arg: string) => void
}) => {
    const options = ["All", "SciFi", "Horror", "Mystery", "Romance", "Adventure", "Kids"]

    return (
        <VStack align="start" w="full">
            <Text fontSize="14">Select genre</Text>
            <Menu>
                <MenuButton
                    w="full"
                    as={Button}
                    rightIcon={<ChevronDown size={18} />}
                    variant="tertiary"
                    textTransform="none"
                    fontWeight="medium"
                >
                    {genre}
                </MenuButton>
                <MenuList>
                    {options.map((item) => (
                        <MenuItem key={item} onClick={() => setGenre(item)}>
                            {item}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </VStack>
    )
}
