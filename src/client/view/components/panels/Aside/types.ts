import { ReactNode } from "react"
import { ThemeType } from "../../../types"

export type IAsidePanel = {
    children: ReactNode
    theme: ThemeType
    className?: string
}