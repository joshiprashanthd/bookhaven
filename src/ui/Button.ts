import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
    baseStyle: {
        borderRadius:8,
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    variants: {
        filled: {
            backgroundColor: "purple.500",
            color: "white"
        }
    },
    defaultProps: {
        size: "md",
        variant: "filled"
    }
})
