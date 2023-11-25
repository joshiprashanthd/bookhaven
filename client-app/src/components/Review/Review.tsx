import { UserIcon } from "@/icons/UserIcon"
import { Box, HStack, VStack, Text } from "@chakra-ui/react"

export const Review = ({}) => {
    return (
        <Box borderRadius={16} bg="gray.50" p={4}>
            <VStack align="start">
                <HStack mb={2}>
                    <Box w={10} h={10} mr={2} display="grid" placeItems="center">
                        <UserIcon size={18} />
                    </Box>
                    <Text fontSize={14} fontWeight={600} color="purple.500">
                        Ankit Mishra
                    </Text>
                </HStack>
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
