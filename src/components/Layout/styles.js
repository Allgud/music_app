import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: ${props => props.theme.wrapperBack};
`

export const Container = styled.div`
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: ${props => props.theme.containerBack};
    display: flex;
`