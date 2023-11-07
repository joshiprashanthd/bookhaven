import axios from "axios"
import { createContext } from "react"

export const AxiosContext = createContext(
    axios.create({
        baseURL: "http://localhost:8080/api",
        withCredentials: true,
    })
)
