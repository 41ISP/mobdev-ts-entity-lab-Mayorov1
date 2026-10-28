import axios from "axios"
import type { IProcessor, IStrapiResponse } from "./types"

export const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const apiInstance = axios.create({
    baseURL: API_URL + "/api",
    headers: {
        Authorization: `Bearer ${API_KEY}`,
    },
})

const getProcessors = async (): Promise<IStrapiResponse<IProcessor[]>> => {
    const res = await apiInstance.get<IStrapiResponse<IProcessor[]>>("/component-pcs")
    return res.data
}

export const api = { getProcessors }