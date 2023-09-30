import { Link, ModalBody, ModalFooter, ModalHeader } from "@chakra-ui/react"

export const LoginBody = ({ setState }: { setState: (state: "login" | "signup") => void }) => {
    return (
        <>
            <ModalHeader>Login</ModalHeader>
            <ModalBody>
                Login Body <Link onClick={() => setState("signup")}>Go to Signup</Link>
            </ModalBody>
            <ModalFooter></ModalFooter>
        </>
    )
}
