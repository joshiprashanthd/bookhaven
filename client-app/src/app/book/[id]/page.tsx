import {
    Badge,
    Box,
    Center,
    Flex,
    HStack,
    Heading,
    Image,
    Spacer,
    Tag,
    Text,
    VStack,
} from "@chakra-ui/react"

export default function Book({ params }: { params: { id: string } }) {
    return (
        <Box as="section">
            <Box borderRadius={16} bg="gray.100" p={8}>
                <Flex>
                    <Image
                        src={
                            "http://books.google.com/books/content?id=KQZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                        }
                        alt={"Giledian"}
                        borderRadius="lg"
                    />
                    <VStack margin={"20px"}>
                        <Heading size={"lg"}>Giledian</Heading>
                        <Heading size={"md"} color={"blackAlpha.700"}>
                            Authors: Marilynne Robinson
                        </Heading>
                        <Text>
                            A NOVEL THAT READERS and critics have been eagerly anticipating for over
                            a decade, Gilead is an astonishingly imagined story of remarkable lives.
                            John Ames is a preacher, the son of a preacher and the grandson (both
                            maternal and paternal) of preachers. It's 1956 in Gilead, Iowa, towards
                            the end of the Reverend Ames's life, and he is absorbed in recording his
                            family's story, a legacy for the young son he will never see grow up.
                            Haunted by his grandfather's presence, John tells of the rift between
                            his grandfather and his father: the elder, an angry visionary who fought
                            for the abolitionist cause, and his son, an ardent pacifist. He is
                            troubled, too, by his prodigal namesake, Jack (John Ames) Boughton, his
                            best friend's lost son who returns to Gilead searching for forgiveness
                            and redemption. Told in John Ames's joyous, rambling voice that finds
                            beauty, humour and truth in the smallest of life's details, Gilead is a
                            song of celebration and acceptance of the best and the worst the world
                            has to offer. At its heart is a tale of the sacred bonds between fathers
                            and sons, pitch-perfect in style and story, set to dazzle critics and
                            readers alike.
                        </Text>
                        <HStack>
                            <Heading size={"sm"}>Genres: </Heading>
                            <Tag variant="solid" colorScheme="teal">
                                American Fiction
                            </Tag>
                            <Tag variant="solid" colorScheme="teal">
                                Fiction
                            </Tag>
                        </HStack>
                        <HStack>
                            <Heading>Total Pages: </Heading>
                            <Badge colorScheme="purple">257</Badge>
                        </HStack>
                    </VStack>
                </Flex>
            </Box>
        </Box>
    )
}
