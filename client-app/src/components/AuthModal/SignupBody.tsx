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
        username: "",
    })

    const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const onFormClick = (e: any) => {
        console.log(e)
        console.log(formState)
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
                            name="firstname"
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
                            name="lastname"
                            type="text"
                            placeholder="..."
                            onChange={onFormChange}
                        />
                    </FormControl>
                    <FormControl w="full">
                        <FormLabel fontWeight="semibold" mb={2} fontSize="14">
                            Username
                        </FormLabel>
                        <Input
                            variant="filled"
                            name="username"
                            type="text"
                            placeholder="..."
                            onChange={onFormChange}
                        />
                    </FormControl>
                    <FormControl w="full">
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

                <Button w="full" mt={4} onClick={onFormClick}>
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
