"use client"

import { AxiosContext } from "@/contexts/AxiosContext"
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
import React, { useContext, useState } from "react"
import { useSetRecoilState } from "recoil"

export const LoginBody = ({ setState }: { setState: (state: "login" | "signup") => void }) => {
    const api = useContext(AxiosContext)
    const setJwtToken = useSetRecoilState(jwtTokenAtom)
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)
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
    const login = async () => {
        setErrorMessage("")
        setLoading(true)
        try {
            const response = await api.post("/users/login", formState)
            setJwtToken(response.data.token)
        } catch (error: any) {
            setErrorMessage("Invalid email or password")
        }
        setLoading(false)
    }

    return (
        <>
            <ModalHeader>Login</ModalHeader>
            <ModalBody>
                <VStack spacing={4}>
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
                    <FormControl w="full" isInvalid={errorMessage.length > 0}>
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
                        {errorMessage.length > 0 && (
                            <FormErrorMessage>{errorMessage}</FormErrorMessage>
                        )}
                    </FormControl>
                </VStack>

                <Button w="full" mt={4} onClick={login} isLoading={loading}>
                    Login
                </Button>

                <Text fontSize={12} as="div" mx="auto" w="fit-content" mt={2}>
                    Create new account by{" "}
                    <Link onClick={() => setState("signup")} fontSize={12} fontWeight="semibold">
                        Signup
                    </Link>
                </Text>
            </ModalBody>
            <ModalFooter></ModalFooter>
        </>
    )
}
