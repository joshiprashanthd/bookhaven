import { extendTheme } from "@chakra-ui/react"
import { Button } from "./Button"
import { Input } from "./Input"
import { Heading } from "./Heading"

export const theme = extendTheme({
    fonts: {
        heading: `Inter, sans-serif`,
        body: `Inter, sans-serif`,
    },
    components: {
        Button,
        Input,
        Heading,
    },
})
