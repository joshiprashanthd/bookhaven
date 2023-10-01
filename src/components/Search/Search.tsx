"use client"
import { Flex, IconButton, Input } from "@chakra-ui/react"
import { SearchIcon } from "@/icons/SearchIcon"

export const Search = () => {
    return (
        <Flex
            justify="space-between"
            h="10"
            align="center"
            my={4}
            py={2}
            pl={4}
            bg="gray.50"
            borderRadius={8}
        >
            <Input variant="unstyled" placeholder="Search" />
            <IconButton
                aria-label="search-button"
                icon={<SearchIcon />}
                borderRightRadius={8}
                borderLeftRadius={0}
            />
        </Flex>
    )
}
