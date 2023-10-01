import { defineStyleConfig } from "@chakra-ui/react"

export const Input = defineStyleConfig({
    baseStyle: {
        field: {
            borderRadius: 8,
            p: 2,
        },
    },
    sizes: {
        normal: {
            field: {
                fontSize: 14,
            },
        },
        big: {
            field: {
                fontSize: 16,
            },
        },
    },
    variants: {
        filled: {
            field: {
                backgroundColor: "gray.50",
                _focus: {
                    backgroundColor: "white",
                },
                _placeholder: {
                    color: "gray.500",
                },
            },
        },
    },
    defaultProps: {
        size: "normal",
        variant: "filled",
    },
})
