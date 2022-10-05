import styled from "styled-components";

export const ListItem = styled.li`
    width: 374px;
    height: 374px;
    padding: 95px;
    background-color: ${props => props.$color};
    display: flex;
    align-items: center;
`

export const ItemTitle = styled.span`
    margin: 0 auto;
    display: inline-block;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
`