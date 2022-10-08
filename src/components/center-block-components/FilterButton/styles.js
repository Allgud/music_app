import styled from "styled-components";

export const FilterButton = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid;
    border-color: ${(props) => props.$active ? '#9A48F1' : '#${props => props.theme.color}'};
    color: ${(props) => props.$active ? '#B672FF' : '#${props => props.theme.color}'};
    border-radius: 60px;
    padding: 6px 20px;
    cursor: pointer;

    &:hover {
        border-color: #D9B6FF;
        color: #D9B6FF;
    }

    &:not(:last-child) {
        margin-right: 10px;
    }

    &:active {
        border-color: #AD61FF;
        color: #AD61FF;
    }
`