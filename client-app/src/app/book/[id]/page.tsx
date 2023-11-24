import { Book } from "@/@types/Book"
import { LibraryIcon } from "@/icons/LibraryIcon"
import {
    Box,
    Button,
    Divider,
    Flex,
    HStack,
    Heading,
    Image,
    Tab,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    Text,
    Textarea,
    VStack,
} from "@chakra-ui/react"

function DescriptionTabPanel({}: {}) {
    return (
        <TabPanel overflow="scroll" h="full" p={6}>
            <Heading size="xl">Spider's Web</Heading>
            <Heading fontWeight={400}>By Charles Osborne and Agatha Christie</Heading>
            <Box my={4}>
                <Heading fontWeight={600} size="lg" mb={2}>
                    Description
                </Heading>
                <Text fontSize={14}>
                    A new 'Christie for Christmas' -- a full-length novel adapted from her acclaimed
                    play by Charles Osborne Following BLACK COFFEE and THE UNEXPECTED GUEST comes
                    the final Agatha Christie play novelisation, bringing her superb storytelling to
                    a new legion of fans. Clarissa, the wife of a Foreign Office diplomat, is given
                    to daydreaming. 'Supposing I were to come down one morning and find a dead body
                    in the library, what should I do?' she muses. Clarissa has her chance to find
                    out when she discovers a body in the drawing-room of her house in Kent.
                    Desperate to dispose of the body before her husband comes home with an important
                    foreign politician, Clarissa persuades her three house guests to become
                    accessories and accomplices. It seems that the murdered man was not unknown to
                    certain members of the house party (but which ones?), and the search begins for
                    the murderer and the motive, while at the same time trying to persuade a police
                    inspector that there has been no murder at all... SPIDER'S WEB was written in
                    1954 specifically for Margaret Lockwood and opened first at the Theatre Royal
                    Nottingham before moving to the Savoy Theatre in London on 14 December 1954.
                    With THE MOUSETRAP and WI
                </Text>
            </Box>
            <HStack borderRadius={8} bg="gray.200" w="full" p={2} mb={4}>
                <VStack flex="1">
                    <Text fontSize={14} fontWeight="bold" color="purple.600" mb={-2}>
                        Number of Pages
                    </Text>
                    <Text>384</Text>
                </VStack>
                <VStack flex="1">
                    <Text fontSize={14} fontWeight="bold" color="purple.600" mb={-2}>
                        Year Published
                    </Text>
                    <Text>2014</Text>
                </VStack>
                <VStack flex="1">
                    <Text fontSize={14} fontWeight="bold" color="purple.600" mb={-2}>
                        Genre
                    </Text>
                    <Text>American Fiction</Text>
                </VStack>
            </HStack>
            <Box w="full">
                <Heading mb={4}>Give a review</Heading>
                <Textarea
                    bg="gray.50"
                    variant="filled"
                    placeholder="..."
                    borderRadius={8}
                    maxLength={2000}
                    h="40"
                    w="full"
                    mb={2}
                />
                <Flex align="center" justify="end">
                    <Button>Submit</Button>
                </Flex>
            </Box>
        </TabPanel>
    )
}

function ReviewsTabPanel() {
    return (
        <TabPanel w="full">
            <Text>Reviews</Text>
            <Box w="full"></Box>
        </TabPanel>
    )
}

export default function Book({ params }: { params: { id: string } }) {
    return (
        <Box as="section" w="full">
            <HStack align="start" spacing={4}>
                <VStack borderRadius={16} bg="gray.100" p={6} w="20vw" align="start" shadow="md">
                    <Box mx="auto" mb={4} minW="40">
                        <Image
                            src="http://books.google.com/books/content?id=gA5GPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                            objectFit="fill"
                            borderRadius={16}
                            w="40"
                        />
                    </Box>
                    <Button variant="primary" w="full">
                        <HStack spacing={2}>
                            <LibraryIcon size={18} />
                            <Text>Add to library</Text>
                        </HStack>
                    </Button>
                </VStack>
                <Tabs isFitted w="full">
                    <VStack
                        flex="1"
                        bg="gray.100"
                        borderRadius={16}
                        minH="100vh"
                        maxH="100vh"
                        overflow="hidden"
                        align="start"
                        shadow="md"
                    >
                        <TabList p={2} border="none" w="full">
                            <Tab
                                _selected={{
                                    backgroundColor: "purple.500",
                                    color: "white",
                                    fontWeight: "bold",
                                    borderRadius: 8,
                                    shadow: "md",
                                }}
                            >
                                Info
                            </Tab>
                            <Tab
                                _selected={{
                                    backgroundColor: "purple.500",
                                    color: "white",
                                    fontWeight: "bold",
                                    borderRadius: 8,
                                    shadow: "md",
                                }}
                            >
                                Reviews
                            </Tab>
                        </TabList>
                        <VStack h="full" overflow="scroll">
                            <TabPanels>
                                <DescriptionTabPanel />
                                <ReviewsTabPanel />
                            </TabPanels>
                        </VStack>
                    </VStack>
                </Tabs>
            </HStack>
        </Box>
    )
}
