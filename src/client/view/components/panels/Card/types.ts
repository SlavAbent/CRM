import { ReactNode } from "react"
import { ThemeType } from "../../../types"

export type ICard = {
    children: ReactNode
    theme: ThemeType
    className?: string
}