import { User } from "@/@types/User"
import { atom, selector } from "recoil"
import { API } from "@/constants/api"

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
    get: async ({ get }) => {
        const token = get(jwtTokenAtom)
        if (!token) return null
        let user: User | null = null
        try {
            const response = await API.get("/users/currentUser", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            user = response.data as User
        } catch (e) {
            console.log("Error: ", e)
        }
        return user
    },
})
