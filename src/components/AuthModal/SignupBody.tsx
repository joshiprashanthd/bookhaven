import {
    Button,
    FormControl,
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

export const SignupBody = ({ setState }: { setState: (state: "login" | "signup") => void }) => {
    const [formState, setFormState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    })

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
                        <FormLabel fontWeight="semibold" mb={1} fontSize="14">
                            First Name
                        </FormLabel>
                        <Input
                            variant="filled"
                            name="firstname"
                            type="text"
                            placeholder="Enter your firstname..."
                            onChange={onFormChange}
                        />
                    </FormControl>
                    <FormControl w="full">
                        <FormLabel fontWeight="semibold" mb={1} fontSize="14">
                            Last Name
                        </FormLabel>
                        <Input
                            variant="filled"
                            name="lastname"
                            type="text"
                            placeholder="Enter your lastname..."
                            onChange={onFormChange}
                        />
                    </FormControl>
                    <FormControl w="full">
                        <FormLabel fontWeight="semibold" mb={1} fontSize="14">
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
                        <FormLabel fontWeight="semibold" mb={1} fontSize="14">
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
