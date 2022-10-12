import styled from "styled-components";

export const CenterBlockFilter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 51px;
    position: relative;
`

export const CenterBlockFilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
    color: ${props => props.theme.color}
`