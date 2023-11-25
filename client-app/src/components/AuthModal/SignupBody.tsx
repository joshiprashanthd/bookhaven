"use client"

import { API } from "@/constants/api"
import { jwtTokenAtom } from "@/recoil/auth"
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Link,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Text,
    VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import { useSetRecoilState } from "recoil"

export const SignupBody = ({ setState }: { setState: (state: "login" | "signup") => void }) => {
    const setJwtToken = useSetRecoilState(jwtTokenAtom)
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const register = async () => {
        setErrorMessage("")
        setLoading(true)
        try {
            const response = await API.post("/users/register", formState)
            setJwtToken(response.data.token)
        } catch (error: any) {
            setErrorMessage((prev) => error.response.data.message)
        }
        setLoading(false)
    }

    const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <>
            <ModalHeader>Sign Up</ModalHeader>
            <ModalBody>
                <VStack spacing={4}>
                    <FormControl w="full">
                        <FormLabel fontWeight="semibold" mb={2} fontSize="14">
                            First Name
                        </FormLabel>
                        <Input
                            variant="filled"
                            name="firstName"
                            type="text"
                            placeholder="..."
                            onChange={onFormChange}
                        />
                    </FormControl>
                    <FormControl w="full">
                        <FormLabel fontWeight="semibold" mb={2} fontSize="14">
                            Last Name
                        </FormLabel>
                        <Input
                            variant="filled"
                            name="lastName"
                            type="text"
                            placeholder="..."
                            onChange={onFormChange}
                        />
                    </FormControl>
                    <FormControl w="full" isInvalid={errorMessage.length > 0}>
                        <FormLabel fontWeight="semibold" mb={2} fontSize="14">
                            Email
                        </FormLabel>
                        <Input
                            variant="filled"
                            name="email"
                            type="email"
                            placeholder="..."
                            onChange={onFormChange}
                        />
                        {errorMessage.length > 0 && (
                            <FormErrorMessage>{errorMessage}</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl w="full">
                        <FormLabel fontWeight="semibold" mb={2} fontSize="14">
                            Password
                        </FormLabel>
                        <Input
                            variant="filled"
                            name="password"
                            type="password"
                            placeholder="..."
                            onChange={onFormChange}
                        />
                    </FormControl>
                </VStack>

                <Button w="full" mt={4} onClick={register} isLoading={loading}>
                    signup
                </Button>

                <Text fontSize={12} as="div" mx="auto" w="fit-content" mt={2}>
                    Already have an account?{" "}
                    <Link onClick={() => setState("login")} fontSize={12} fontWeight="semibold">
                        Login
                    </Link>
                </Text>
            </ModalBody>
            <ModalFooter></ModalFooter>
        </>
    )
}
