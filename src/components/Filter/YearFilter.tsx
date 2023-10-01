import {
    Button,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    VStack,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"

export const YearFilter = () => {
    const [range, setRange] = useState([2000, 2000])

    useEffect(() => {
        if (range[0] >= range[1]) setRange(range => [range[0], range[0]])
    }, [range[0]])

    return (
        <VStack w="full" align="start">
            <Text>Select year range</Text>
            <HStack w="full">
                <YearMenu
                    selected={range[0]}
                    min={2000}
                    max={2023}
                    onChange={(select) => setRange((range) => [select, range[1]])}
                />
                <Text>To</Text>
                <YearMenu
                    selected={range[1]}
                    min={range[0]}
                    max={2023}
                    onChange={(select) => setRange((range) => [range[0], select])}
                />
            </HStack>
        </VStack>
    )
}

const YearMenu = ({
    selected,
    min,
    max,
    onChange,
}: {
    selected: number
    min: number
    max: number
    onChange: (arg: number) => void
}) => {
    const range = []
    for (let i = min; i <= max; i++) {
        range.push(i)
    }

    return (
        <Menu>
            <MenuButton as={Button} w="full" bg="gray.50" borderRadius={8}>
                {selected}
            </MenuButton>
            <MenuList maxH="64" overflow="scroll" borderRadius={8} w="full">
                {range.map((item) => (
                    <MenuItem key={item} onClick={() => onChange(item)}>
                        {item}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}
