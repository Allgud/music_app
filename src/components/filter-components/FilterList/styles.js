import styled from "styled-components";

export const FilterList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 34px;
    gap: 40px;
    width: 248px;
    max-height: 305px;
    background: ${props => props.theme.filterListBack};
    border-radius: 12px;
    position: absolute;
    top: 50px;
    left: ${(props) => props.$activeSelector === 'author' ? '90px' : '390px'};
    overflow: auto;
`