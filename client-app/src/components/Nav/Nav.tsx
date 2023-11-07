"use client"

import { Flex, HStack, Image, Text } from "@chakra-ui/react"
import { Layout } from "../Layout/Layout"
import { LoginButton } from "../LoginButton/LoginButton"
import { Search } from "../Search/Search"
import { NavMenu } from "./NavMenu"
import { Link } from "@chakra-ui/next-js"

export function Nav() {
    return (
        <Flex as="nav">
            <Layout>
                <Flex
                    justify="space-between"
                    minW="full"
                    align="center"
                    h="16"
                    my={4}
                    py={2}
                    px={4}
                    bg="gray.100"
                    border="gray.400"
                    borderRadius={16}
                >
                    <Link
                        href="/"
                        as={Text}
                        fontSize={20}
                        fontWeight={700}
                        color="purple.500"
                        _hover={{ textDecoration: "none" }}
                    >
                        BookHaven
                    </Link>
                    <Search />
                    <HStack align="center" spacing={4}>
                        <LoginButton />
                        <NavMenu />
                    </HStack>
                </Flex>
            </Layout>
        </Flex>
    )
}
