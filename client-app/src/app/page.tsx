import { BooksList } from "@/components/BooksList/BooksList"
import { Filter } from "@/components/Filter/Filter"
import { Heading } from "@chakra-ui/react"

export default function Home() {
    return (
        <main>
            <Heading size={"lg"} margin={"20px"} textAlign={"center"} color={"blue.700"}>
                Featured Books
            </Heading>
            <BooksList />
        </main>
    )
}
