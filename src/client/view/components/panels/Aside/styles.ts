import s from 'styled-components'

const SAsidePanel = s.aside<{
    theme: string
}>`
    backgroun-color: ${p => p.theme === "light" ? "white" : "dark"};
    background-color: green;
    padding: 16px;
    border-radius: 16px;
    height: calc(100% - 62px);
    width: 32px;
    position: absolute;
    top: 16px;
    left: 16px;
    bottom: 16px;
`

export {
    SAsidePanel
}