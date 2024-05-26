import { ReactNode } from "react"

type ThemeType = "light" | "dark" | "auto"

export type IHeaderPanel = {
    children: ReactNode
    theme: ThemeType
    className?: string
}