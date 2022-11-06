import styled from "styled-components";

export const SearchInput = styled.input`
    flex-grow: 100;
    background: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.color};

    &::placeholder {
        background: transparent;
        color: ${props => props.theme.color};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }

    &:focus {
        border: none;
        outline: none;
    }
`