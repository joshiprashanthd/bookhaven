"use client"

import "@fontsource/inter/600.css"
import "@fontsource/inter/400.css"

import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { RecoilRoot } from "recoil"
import { theme } from "@/ui/Theme"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <RecoilRoot>
            <CacheProvider>
                <ChakraProvider theme={theme}>{children}</ChakraProvider>
            </CacheProvider>
        </RecoilRoot>
    )
}
