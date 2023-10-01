"use client"

import { Heading, VStack } from "@chakra-ui/react"
import React from "react"
import { YearFilter } from "./YearFilter"
import { GenreFilter } from "./GenreFilter"

export const Filter = () => {
    return (
        <VStack spacing={4} bg="gray.100" borderRadius={16} minW="72" p={4} align="start">
            <Heading size="md" fontWeight="semibold">
                Filters
            </Heading>
            <YearFilter />
            <GenreFilter />
        </VStack>
    )
}
