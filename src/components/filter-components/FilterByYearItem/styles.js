import styled from "styled-components";

export const FilterByYearItem = styled.div`
    display: flex;
    gap: 14px;
    color: ${props => props.theme.color};

    & label {
        white-space: nowrap;
    }
}
`