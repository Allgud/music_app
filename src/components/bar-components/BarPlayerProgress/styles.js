import styled from "styled-components"

export const BarPlayerProgress = styled.div`
    height: 5px;
    background: ${props => props.theme.progressBack};
`
export const FilledBarPlayerProgress = styled.div`
    width: ${props => props.$width};
    height: 5px;
    background: #B672FF;
    transform: translateY(-5px);
    transition: width 0.2s;
`

export const BarPlayerProgressBox = styled.div`
    width: 100%;
`