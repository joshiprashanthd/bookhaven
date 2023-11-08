import { Filter } from "@/components/Filter/Filter"
import { Flex } from "@chakra-ui/react"

export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <Flex as="section" w="full">
            <Flex align="start" gap={8}>
                <Filter />
                <Flex flex="1">{children}</Flex>
            </Flex>
        </Flex>
    )
}
