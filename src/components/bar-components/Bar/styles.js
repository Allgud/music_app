import styled from "styled-components";

export const Bar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${props => props.theme.containerBack};
`

export const BarContent = styled.div`
    display: flex;
    flex-direction: column;
`