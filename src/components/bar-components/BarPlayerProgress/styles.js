import styled from "styled-components"

export const BarPlayerProgress = styled.div`
    width: 100%;
    height: 5px;
    background: #2E2E2E;
`
export const FilledBarPlayerProgress = styled.div`
    width: ${props => props.$width};
    height: 5px;
    background: #B672FF;
    transform: translateY(-5px);
`