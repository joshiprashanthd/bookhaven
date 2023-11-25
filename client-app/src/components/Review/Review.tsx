import { StarIcon } from "@/icons/StarIcon"
import { UserIcon } from "@/icons/UserIcon"
import { Box, HStack, VStack, Text, Flex } from "@chakra-ui/react"

export const Review = ({}) => {
    return (
        <Box borderRadius={16} bg="gray.50" p={4}>
            <VStack align="start">
                <Flex mb={2} justify="space-between" w="full">
                    <HStack>
                        <Box
                            w={10}
                            h={10}
                            mr={1}
                            display="grid"
                            placeItems="center"
                            borderRadius="full"
                            bg="gray.400"
                        >
                            <UserIcon size={18} />
                        </Box>
                        <Text fontSize={14} fontWeight={600} color="purple.500">
                            Ankit Mishra
                        </Text>
                    </HStack>

                    <HStack>
                        <Text>4</Text>
                        <StarIcon
                            size={18}
                            fill="rgb(128, 90, 213)"
                            strokeColor="rgb(128, 90, 213)"
                        />
                    </HStack>
                </Flex>
                <Box>
                    <Text fontSize={14}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat quos cum
                        perspiciatis fugiat nostrum quasi, voluptas veritatis ipsam pariatur. Error
                        voluptates, ullam esse officiis sunt placeat consequuntur harum eveniet
                        quibusdam.
                    </Text>
                </Box>
            </VStack>
        </Box>
    )
}
