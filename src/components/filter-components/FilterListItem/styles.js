import styled from "styled-components";

export const FilterListItem = styled.li`
    color: ${props => props.theme.color};

    &:hover {
        color: #AD61FF;
        text-decoration: underline;
        cursor: pointer;
    }
`