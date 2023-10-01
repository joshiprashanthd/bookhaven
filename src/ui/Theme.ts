import { extendTheme } from "@chakra-ui/react";
import { Button } from "./Button";
import { Input } from "./Input";

export const theme = extendTheme({
    components: {
        Button,
        Input
    }
})