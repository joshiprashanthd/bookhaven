import { Layout } from "@/components/Layout/Layout"
import { Nav } from "@/components/Nav/Nav"
import type { Metadata } from "next"
import { Providers } from "./providers"

export const metadata: Metadata = {
    title: "Bookhaven",
    description: "Bookhaven is a discussion forum for book lovers",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Nav />
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    )
}
