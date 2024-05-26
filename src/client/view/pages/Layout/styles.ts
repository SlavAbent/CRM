import s from "styled-components"

const SLayoutWrapper = s.div<{ theme: string }>`
    width: 100%;
    height: 100vh;
    background-color: ${p => p.theme === "light" ? "white" : "dark"};
`

const SLayoutMain = s.main`
    position: absolute;
    border: 1px solid red;
    height: calc(100% - 100px);
    width: calc(100% - 118px);
    top: 84px;
    left: 100px;
    border-radius: 16px;
`


export { SLayoutWrapper, SLayoutMain }