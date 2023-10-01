import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
    baseStyle: {
        borderRadius:8,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    sizes: {
        sm: {
            fontSize: 10,
        },
        md: {
            fontSize: 12
        }
    },
    variants: {
        primary: {
            backgroundColor: "purple.500",
            color: "white",
            _hover: {
                backgroundColor: "purple.400"
            }
        },
        secondary: {
            backgroundColor: "none",
            borderWidth: 2,
            borderColor: "purple.400",
            _hover: {
                backgroundColor: "purple.50"
            }
        },
        tertiary: {
            backgroundColor: "gray.50",
            color: "black",
            _hover: {
                backgroundColor: "gray.100"
            }
        }
    },
    defaultProps: {
        size: "md",
        variant: "primary"
    }
})
