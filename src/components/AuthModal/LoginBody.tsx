import {
    FormControl,
    FormLabel,
    Input,
    Link,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Text,
    VStack,
    Button,
} from "@chakra-ui/react"
import React, { useState } from "react"

export const LoginBody = ({ setState }: { setState: (state: "login" | "signup") => void }) => {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    })

    const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <>
            <ModalHeader>Login</ModalHeader>
            <ModalBody>
                <VStack spacing={4}>
                    <FormControl w="full">
                        <FormLabel fontWeight="semibold" mb={1}>
                            Email
                        </FormLabel>
                        <Input
                            variant="filled"
                            name="email"
                            type="email"
                            placeholder="Enter your email..."
                            onChange={onFormChange}
                        />
                    </FormControl>
                    <FormControl w="full">
                        <FormLabel fontWeight="semibold" mb={1}>
                            Password
                        </FormLabel>
                        <Input
                            variant="filled"
                            name="password"
                            type="password"
                            placeholder="Enter your password..."
                            onChange={onFormChange}
                        />
                    </FormControl>
                </VStack>

                <Button w="full" mt={4}>
                    Login
                </Button>

                <Text fontSize={12} as="div" mx="auto" w="fit-content" mt={2}>
                    Create new account by{" "}
                    <Link onClick={() => setState("signup")} fontSize={12} fontWeight="semibold">
                        Signup
                    </Link>
                </Text>
            </ModalBody>
        </>
    )
}
