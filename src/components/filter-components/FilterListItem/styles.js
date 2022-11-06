import styled from "styled-components";

export const FilterListItem = styled.li`
    color: ${props => props.theme.color};

    label:hover {
        color: #D9B6FF;
        text-decoration: underline;
        cursor: pointer;
    }

    input[type=checkbox] {
        display: none;

        &:checked + label {
            color: #AD61FF;
        }
    }
`