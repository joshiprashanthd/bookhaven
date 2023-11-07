import { User } from "@/@types/User"
import { atom, selector } from "recoil"

export const jwtTokenAtom = atom<string | null>({
    key: "jwtToken",
    default: null,
    effects: [
        ({ setSelf, onSet, trigger }) => {
            if (trigger == "get") setSelf(localStorage.getItem("jwtToken"))

            onSet((value, isReset) => {
                isReset || value == null
                    ? localStorage.removeItem("jwtToken")
                    : localStorage.setItem("jwtToken", value)
            })
        },
    ],
})

export const currentUser = selector<User | null>({
    key: "CurrentUser",
    get: ({ get }) => {
        const token = get(jwtTokenAtom)
        if (!token) return null
        // fetch user based on token
        return {
            userId: 1,
            firstName: "prashant",
            lastName: "joshi",
            email: "bob@bob.com",
            isAdmin: false,
            dateJoined: 129821903,
        }
    },
})
