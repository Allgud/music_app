import styled from "styled-components";

export const ThemeButton = styled.svg`
    width: 39px;
    height: 39px;
    background: ${props => props.theme.themeBtnBack};
    fill: transparent;

    &:hover {
        cursor: pointer;
    }
`