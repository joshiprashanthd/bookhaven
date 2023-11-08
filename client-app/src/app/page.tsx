import { BooksList } from "@/components/BooksList/BooksList"
import { Box, Heading } from "@chakra-ui/react"

export default function Home() {
    return (
        <Box as="main" w="full">
            <Heading size="xl" mb={8} fontWeight="extrabold" letterSpacing="tight">
                Featured Books
            </Heading>
            <BooksList columns={5} />
        </Box>
    )
}
