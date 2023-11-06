import { BooksList } from "@/components/BooksList/BooksList"
import { Box, Heading } from "@chakra-ui/react"

export default function Search({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    return (
        <Box margin={"10px"}>
            <Heading size={"lg"} margin={"10px"}>
                Search Results for: {searchParams.q}
            </Heading>
            <BooksList />
        </Box>
    )
}
