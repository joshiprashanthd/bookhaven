import { Box, Heading } from "@chakra-ui/react"

export default function Book({ params }: { params: { id: string } }) {
    return (
        <Box as="section">
            <Box borderRadius={16} bg="gray.100" p={8}>
                <Heading>Book {params.id}</Heading>
            </Box>
        </Box>
    )
}
