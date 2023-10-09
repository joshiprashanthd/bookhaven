import { EditProfileButton } from "@/components/EditProfileButton/EditProfileButton"
import { Box, Text, HStack, VStack, Heading } from "@chakra-ui/react"

export default function ProfilePage({ params }: { params: { username: string } }) {
    return (
        <Box as="section" w="full">
            <HStack align="start" spacing={4}>
                <VStack borderRadius={16} bg="gray.100" p={8} w="20vw" align="start">
                    <Box h="52" w="52" borderRadius="full" bg="gray.500" mx="auto" mb={4}></Box>
                    <Heading size="lg">Prashant Joshi</Heading>
                    <Text color="purple.500">{params.username}</Text>
                    <VStack align="start" spacing="-4">
                        <Text fontWeight="bold">About ME</Text>
                        <Text fontSize="14">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe maxime
                            doloremque atque est modi adipisci! Tenetur eius asperiores error
                            delectus dolore repellat obcaecati aut, enim dicta.
                        </Text>
                    </VStack>
                    <Text fontSize="14">Location : India</Text>
                    <Text fontSize="14">Personal Site : something.com</Text>
                    <EditProfileButton />
                </VStack>
                <VStack flex="1" bg="gray.100" borderRadius={16} p={8} minH="100vh"></VStack>
            </HStack>
        </Box>
    )
}
