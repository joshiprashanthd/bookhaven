"use client"

import { Flex, IconButton, Input } from "@chakra-ui/react"
import { SearchIcon } from "@/icons/SearchIcon"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const Search = () => {
    const [query, setQuery] = useState("")
    const router = useRouter()

    const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setQuery(e.target.value)
    }

    return (
        <Flex
            justify="space-between"
            h="10"
            align="center"
            my={4}
            py={2}
            pl={4}
            bg="gray.50"
            borderRadius={8}
        >
            <Input variant="unstyled" placeholder="Search" onChange={onChangeQuery} />
            <IconButton
                h={10}
                w={12}
                variant="tertiary"
                aria-label="search-button"
                icon={<SearchIcon />}
                borderRightRadius={8}
                borderLeftRadius={0}
                onClick={() => router.push(`/search?q=${query}`)}
            />
        </Flex>
    )
}
