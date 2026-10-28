export interface IStrapiResponse<T> {
data: T
meta?: Meta
}

export interface IProcessor {
id: number
documentId: string
name: string
type: ProcessorType
price: number
instock: boolean
power: number
releaseDate: string
rating: number
createdAt: string
updatedAt: string
publishedAt: string
}

export type ProcessorInput = Omit< IProcessor, | "id" | "documentId" | "createdAt" | "updatedAt" | "publishedAt" >

export interface Meta {
pagination: Pagination
}

export interface Pagination {
page: number
pageSize: number
pageCount: number
total: number
}

export const TYPE = ["CPU"] as const

export type ProcessorType = (typeof TYPE)[number]

export const TYPE_LABELS: Record<ProcessorType, string> = {
CPU: "Процессор",
}