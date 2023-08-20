import axios from "axios";
import { BASE_URL, TokenCybersoft } from "../utils/constant";
import { localUser } from "../utils/localUser";
export const configHeaders = () => {
    return {
        TokenCybersoft: TokenCybersoft,
        Authorization: `Bearer ${localUser.get()?.accessToken}`
    }
}

export const https = axios.create({
    baseURL: BASE_URL,
    headers: configHeaders()
})
