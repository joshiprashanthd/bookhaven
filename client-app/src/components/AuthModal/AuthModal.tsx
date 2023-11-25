"use client"

import { jwtTokenAtom } from "@/recoil/auth"
import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { LoginBody } from "./LoginBody"
import { SignupBody } from "./SignupBody"

export const AuthModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const jwtToken = useRecoilValue(jwtTokenAtom)
    const [state, setState] = useState<"login" | "signup">("login")

    useEffect(() => {
        if (jwtToken) onClose()
    }, [jwtToken])

    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent borderRadius={16} bg="gray.100" border="gray.400">
                <ModalCloseButton />
                {state == "login" ? (
                    <LoginBody setState={setState} />
                ) : (
                    <SignupBody setState={setState} />
                )}
            </ModalContent>
        </Modal>
    )
}
