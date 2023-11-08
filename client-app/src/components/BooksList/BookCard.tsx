import { Book } from "@/@types/Book"
import { Link } from "@chakra-ui/next-js"
import { Heading, Image, Text } from "@chakra-ui/react"

interface BookCardProps {
    book: Book
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
    return (
        <Link href={`/book/${book.bookId}`} zIndex="100">
            <Image
                src={book.imageUrl}
                alt={book.title}
                borderRadius={8}
                objectFit="cover"
                _groupHover={{
                    shadow: "2xl",
                }}
                shadow="lg"
                mb={4}
            />
            <Heading size="md">{book.title}</Heading>
            <Text fontSize={14}>By {book.authors.split(";")[0]}</Text>
        </Link>
    )
}
