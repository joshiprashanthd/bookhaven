import { Link, ModalBody, ModalFooter, ModalHeader } from "@chakra-ui/react"

export const SignupBody = ({ setState }: { setState: (state: "login" | "signup") => void }) => {
    return (
        <>
            <ModalHeader>Sign Up</ModalHeader>
            <ModalBody>
                Signup Body <Link onClick={() => setState("login")}>Go to Login</Link>
            </ModalBody>
            <ModalFooter></ModalFooter>
        </>
    )
}
