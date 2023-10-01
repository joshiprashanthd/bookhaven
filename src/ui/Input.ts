import { defineStyleConfig } from "@chakra-ui/react";

export const Input = defineStyleConfig({
    baseStyle: {
        borderRadius: 8,
    },
    sizes: {
        normal: {
            fontSize: 12
        }
    },
    variants: {
        filled: {
            backgroundColor: "gray.50",
            _hover: {
                backgroundColor: "gray.100"
            },
            _placeholder: {
                color: "gray.200"
            }
        }
    },
    defaultProps: {
        size: "normal",
        variant: "filled"
    }
})