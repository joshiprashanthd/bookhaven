"use client"
import { Button, useDisclosure } from "@chakra-ui/react"
import { EditProfileModal } from "../EditProfileModal/EditProfileModal"

export const EditProfileButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen} w="full">
                Edit Profile
            </Button>
            <EditProfileModal isOpen={isOpen} onClose={onClose} />
        </>
    )
}
