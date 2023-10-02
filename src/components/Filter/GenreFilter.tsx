import { ChevronDown } from "@/icons/ChevronDown"
import { Button, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"

export const GenreFilter = () => {
    const options = ["SciFi", "Horror", "Mystery", "Romance", "Adventure", "Kids"]
    const defaultName = "SciFi"
    const [selected, setSelected] = useState(defaultName)

    return (
        <VStack align="start" w="full">
            <Text fontSize="sm">Select genre</Text>
            <Menu>
                <MenuButton w="full" as={Button} rightIcon={<ChevronDown />} variant="tertiary">
                    {selected}
                </MenuButton>
                <MenuList>
                    {options.map((item) => (
                        <MenuItem key={item} onClick={() => setSelected(item)}>
                            {item}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </VStack>
    )
}
