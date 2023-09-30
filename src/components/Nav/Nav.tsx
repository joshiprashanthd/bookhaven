"use client"

import { Link } from "@chakra-ui/next-js"
import { Flex, HStack, Text } from "@chakra-ui/react"
import config from "../../config/siteConfig"
import { Layout } from "../Layout/Layout"
import { LoginButton } from "../LoginButton/LoginButton"
import { Search } from "../Search/Search"

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
                    <Text fontSize={20} fontWeight={700} color="purple.500">
                        BookHaven
                    </Text>
                    <Search />
                    <Flex>
                        <HStack spacing={4}>
                            {config.nav.links.map(({ title, href }) => (
                                <Link href={href} key={title}>
                                    {title}
                                </Link>
                            ))}
                        </HStack>
                        <LoginButton />
                    </Flex>
                </Flex>
            </Layout>
        </Flex>
    )
}
