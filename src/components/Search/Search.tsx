"use client"
import { Flex, HStack, IconButton, Input } from "@chakra-ui/react"
import { Layout } from "../Layout/Layout"
import { SearchIcon } from "@/icons/SearchIcon"
import { Filter } from "../Filter/Filter"

export const Search = () => {
    return (
        <Layout>
            <HStack minW="full" h="12" overflow="hidden" spacing="4">
                <Flex
                    justify="space-between"
                    h="full"
                    align="center"
                    flex="1"
                    my={4}
                    py={2}
                    px={4}
                    bg="gray.100"
                    border="gray.400"
                    borderRadius={16}
                >
                    <Input
                        p={0}
                        placeholder="Search"
                        border={0}
                        __css={{
                            decoration: "none",
                        }}
                        _focus={{
                            border: "none",
                        }}
                        _focusVisible={{
                            border: "none",
                        }}
                    />
                    <IconButton aria-label="search-button" icon={<SearchIcon />} />
                </Flex>
                <HStack spacing="4">
                    <Filter name="Year" options={["2012", "2013", "2014", "2015"]} />
                    <Filter
                        name="Genre"
                        options={["SciFi", "Horror", "Romance", "Action", "Comic"]}
                    />
                </HStack>
            </HStack>
        </Layout>
    )
}
