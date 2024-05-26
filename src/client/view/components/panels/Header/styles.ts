import s from 'styled-components'

const SHeaderPanel = s.header<{
    theme: string
}>`
    background-color: ${p => p.theme === "light" ? "white" : "dark"};
    padding: 16px;
    border-radius: 16px;
    background-color: red;
    position: absolute;
    top: 16px;
    left: 96px;
    right: 16px;
    width: calc(100% - 144px);
`

export {
    SHeaderPanel
}