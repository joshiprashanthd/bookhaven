"use client"

import { Container } from "@chakra-ui/react"
import React from "react"

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container centerContent maxW="container.xl">
            {children}
        </Container>
    )
}
