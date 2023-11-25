"use client"

import { EditProfileButton } from "@/components/EditProfileButton/EditProfileButton"
import { LocationPinIcon } from "@/icons/LocationPinIcon"
import { MailIcon } from "@/icons/MailIcon"
import { currentUser } from "@/recoil/auth"
import { Box, Center, HStack, Heading, Text, VStack } from "@chakra-ui/react"
import { useRecoilValue } from "recoil"

export default function ProfilePage() {
    const user = useRecoilValue(currentUser)
    if (!user) {
        return <Center>No user had logged in</Center>
    }

    return (
        <Box as="section" w="full">
            <HStack align="start" spacing={4}>
                <VStack borderRadius={16} bg="gray.100" p={6} w="20vw" align="start" shadow="lg">
                    <Box h="52" w="52" borderRadius="full" bg="gray.500" mx="auto" mb={4}></Box>
                    <Heading size="lg">
                        {user?.firstName} {user?.lastName}
                    </Heading>
                    <Text color="purple.500">@currentUser</Text>
                    <VStack align="start" spacing="-4">
                        <Text fontWeight="bold">About ME</Text>
                        <Text fontSize="14">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe maxime
                            doloremque atque est modi adipisci! Tenetur eius asperiores error
                            delectus dolore repellat obcaecati aut, enim dicta.
                        </Text>
                    </VStack>
                    <HStack align="center" spacing={2}>
                        <LocationPinIcon size={18} />
                        <Text fontSize="14">India</Text>
                    </HStack>
                    <HStack spacing={2}>
                        <MailIcon size={18} />
                        <Text fontSize="14">{user?.email}</Text>
                    </HStack>
                    <EditProfileButton />
                </VStack>
                <VStack flex="1" bg="gray.100" borderRadius={16} p={8} minH="100vh"></VStack>
            </HStack>
        </Box>
    )
}
