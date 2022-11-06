import styled from "styled-components";


export const NavMenuList = styled.ul`
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 11px;
    color: ${props => props.$theme.color};
    margin-bottom: 16px;
`

export const NavMenuItem = styled.li`
    padding: 5px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    &:hover {
        cursor: pointer;
    }
`

