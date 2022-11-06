import styled from "styled-components";

export const FilterByYearItem = styled.div`
    display: flex;
    gap: 14px;
    color: ${props => props.theme.color};

    & label {
        cursor: pointer;
        white-space: nowrap;

        &:hover {
            color: #D9B6FF;
        }
    }

    input:checked + label {
        color: #AD61FF;
    }
}
`