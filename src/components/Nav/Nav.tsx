"use client"

import { Link } from "@chakra-ui/next-js"
import { Flex, Text } from "@chakra-ui/react"
import config from "../../config/siteConfig"
import { Layout } from "../Layout/Layout"

export function Nav() {
    return (
        <Flex as="nav">
            <Layout>
                <Flex
                    justify="space-between"
                    minW="full"
                    align="center"
                    h="12"
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
                    <Flex>
                        {config.nav.links.map(({ title, href }) => (
                            <Link href={href} mx={4} key={title}>
                                {title}
                            </Link>
                        ))}
                    </Flex>
                </Flex>
            </Layout>
        </Flex>
    )
}
