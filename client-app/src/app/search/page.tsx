import { BooksList } from "@/components/BooksList/BooksList"
import { Box, Heading } from "@chakra-ui/react"

export default function Search({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    return (
        <Box>
            <Heading size="lg" mb={8}>
                Search Results for: {searchParams.q}
            </Heading>
            <BooksList columns={4} />
        </Box>
    )
}
