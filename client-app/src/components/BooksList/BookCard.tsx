import { Book } from "@/@types/Book"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Stack,
    Heading,
    Image,
    Text,
    Divider,
    ButtonGroup,
    Button,
    Center,
    Tag,
    Avatar,
    TagLabel,
} from "@chakra-ui/react"
import Link from "next/link"

interface BookCardProps {
    book: Book
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
    return (
        <Card maxW="sm">
            <CardBody>
                <Center>
                    <Image src={book.imageUrl} alt={book.title} borderRadius="lg" />
                </Center>
                <Stack mt="6" spacing="3">
                    <Heading size="md">{book.title}</Heading>
                    <Heading size={"sm"} color={"blackAlpha.600"}>
                        {book.subtitle}
                    </Heading>
                    {book.authors.split(";").map((author) => {
                        return (
                            <Tag size="lg" colorScheme={"blue"} borderRadius="full" width={"250px"}>
                                <Avatar
                                    src="https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58481.jpg"
                                    size="xs"
                                    name={author}
                                    ml={-1}
                                    mr={2}
                                    fontSize={"4xl"}
                                />
                                <TagLabel>{author}</TagLabel>
                            </Tag>
                        )
                    })}
                    <Text>{book.description.slice(0, 100)}...</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing="2">
                    <Link href={`/book/${book.bookId}`}>
                        <Button variant="solid" colorScheme="purple">
                            View Detail
                        </Button>
                    </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}
