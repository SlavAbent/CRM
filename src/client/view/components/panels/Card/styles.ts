import s from 'styled-components'

const SCard = s.div<{
    theme: string
}>`
    backgrounds-color: ${p => p.theme === "light" ? "white" : "dark"};
    padding: 16px;
    border-radius: 16px
`

export {
    SCard
}