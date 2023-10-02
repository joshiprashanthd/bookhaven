import { Filter } from "@/components/Filter/Filter"
import { Layout } from "@/components/Layout/Layout"
import { Nav } from "@/components/Nav/Nav"
import { Flex } from "@chakra-ui/react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Bookhaven",
    description: "Bookhaven is a discussion forum for book lovers",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <Nav />
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    )
}
