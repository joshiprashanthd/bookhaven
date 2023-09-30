"use client"
import { Flex, HStack, IconButton, Input } from "@chakra-ui/react"
import { Layout } from "../Layout/Layout"
import { SearchIcon } from "@/icons/SearchIcon"

export const Search = () => {
    return (
        <Layout>
            <HStack minW="full" h="10" overflow="hidden" spacing="4">
                <Flex
                    justify="space-between"
                    h="full"
                    align="center"
                    flex="1"
                    my={4}
                    py={2}
                    px={4}
                    bg="gray.50"
                    borderRadius={8}
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
                    <IconButton aria-label="search-button" icon={<SearchIcon />} bg="none" />
                </Flex>
            </HStack>
        </Layout>
    )
}
