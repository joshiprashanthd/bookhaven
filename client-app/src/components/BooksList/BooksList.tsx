"use client"

import { Book } from "@/@types/Book"
import { SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { BookCard } from "./BookCard"

export const BooksList = ({ columns = 5 }: { columns?: number }) => {
    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        const fetchedBooks: Book[] = [
            {
                bookId: 1,
                title: "Gilead",
                imageUrl:
                    "http://books.google.com/books/content?id=KQZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                genre: "Fiction",
                authors: "Marilynne Robinson",
                description:
                    "A NOVEL THAT READERS and critics have been eagerly anticipating for over a decade, Gilead is an astonishingly imagined story of remarkable lives. John Ames is a preacher, the son of a preacher and the grandson (both maternal and paternal) of preachers. It's 1956 in Gilead, Iowa, towards the end of the Reverend Ames's life, and he is absorbed in recording his family's story, a legacy for the young son he will never see grow up. Haunted by his grandfather's presence, John tells of the rift between his grandfather and his father: the elder, an angry visionary who fought for the abolitionist cause, and his son, an ardent pacifist. He is troubled, too, by his prodigal namesake, Jack (John Ames) Boughton, his best friend's lost son who returns to Gilead searching for forgiveness and redemption. Told in John Ames's joyous, rambling voice that finds beauty, humour and truth in the smallest of life's details, Gilead is a song of celebration and acceptance of the best and the worst the world has to offer. At its heart is a tale of the sacred bonds between fathers and sons, pitch-perfect in style and story, set to dazzle critics and readers alike.",
                numPages: 247,
                publishedYear: 2004,
            },
            {
                bookId: 2,
                title: "Spider's Web",
                subtitle: "A Novel",
                imageUrl:
                    "http://books.google.com/books/content?id=gA5GPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                genre: "Detective and mystery stories",
                authors: "Charles Osborne;Agatha Christie",
                description:
                    "A new 'Christie for Christmas' -- a full-length novel adapted from her acclaimed play by Charles Osborne Following BLACK COFFEE and THE UNEXPECTED GUEST comes the final Agatha Christie play novelisation, bringing her superb storytelling to a new legion of fans. Clarissa, the wife of a Foreign Office diplomat, is given to daydreaming. 'Supposing I were to come down one morning and find a dead body in the library, what should I do?' she muses. Clarissa has her chance to find out when she discovers a body in the drawing-room of her house in Kent. Desperate to dispose of the body before her husband comes home with an important foreign politician, Clarissa persuades her three house guests to become accessories and accomplices. It seems that the murdered man was not unknown to certain members of the house party (but which ones?), and the search begins for the murderer and the motive, while at the same time trying to persuade a police inspector that there has been no murder at all... SPIDER'S WEB was written in 1954 specifically for Margaret Lockwood and opened first at the Theatre Royal Nottingham before moving to the Savoy Theatre in London on 14 December 1954. With THE MOUSETRAP and WI",
                numPages: 241,
                publishedYear: 2000,
            },
            {
                bookId: 3,
                title: "The One Tree",
                imageUrl:
                    "http://books.google.com/books/content?id=OmQawwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                genre: "American fiction",
                authors: "Stephen R. Donaldson",
                description:
                    "Volume Two of Stephen Donaldson's acclaimed second trilogy featuing the compelling anti-hero Thomas Covenant.",
                numPages: 479,
                publishedYear: 1982,
            },
            {
                bookId: 4,
                title: "Rage of angels",
                imageUrl:
                    "http://books.google.com/books/content?id=FKo2TgANz74C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                genre: "Fiction",
                authors: "Sidney Sheldon",
                description:
                    "A memorable, mesmerizing heroine Jennifer -- brilliant, beautiful, an attorney on the way up until the Mafia's schemes win her the hatred of an implacable enemy -- and a love more destructive than hate. A dangerous, dramatic world The Dark Arena of organized crime and flashbulb lit courtrooms where ambitious prosecutors begin their climb to political power.",
                numPages: 512,
                publishedYear: 1993,
            },
        ]
        setBooks(fetchedBooks)
    }, [])

    return (
        <SimpleGrid columns={columns} gap={4}>
            {books.map((book) => {
                return <BookCard key={book.bookId} book={book} />
            })}
        </SimpleGrid>
    )
}
