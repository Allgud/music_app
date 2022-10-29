import styled from "styled-components";

export const FilterByYear = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 403px;
    height: 92px;
    gap: 14px;
    border-radius: 12px;
    position: absolute;
    top: 50px;
    left: 240px;
    background-color: ${props => props.theme.filterListBack};
    z-index: 100;
`

export const FilterByYearItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px;
    gap: 24px;
    width: 100%;
` 