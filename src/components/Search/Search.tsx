"use client"

import { Flex, IconButton, Input } from "@chakra-ui/react"
import { SearchIcon } from "@/icons/SearchIcon"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export const Search = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [query, setQuery] = useState(searchParams.get("q") || "")

    const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setQuery(e.target.value)
    }

    const onSearch = () => {
        if (query.length > 0) router.push(`/search?q=${query}`)
    }

    return (
        <Flex justify="space-between" h="10" align="center" pl={4} bg="gray.50" borderRadius={8}>
            <Input variant="unstyled" placeholder="Search" onChange={onChangeQuery} />
            <IconButton
                size="icon"
                variant="tertiary"
                aria-label="search-button"
                icon={<SearchIcon />}
                onClick={onSearch}
            />
        </Flex>
    )
}
