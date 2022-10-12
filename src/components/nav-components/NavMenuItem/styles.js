import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const NavMenuItem = styled.li`
    padding: 5px 0;
    margin-bottom: 16px;
`
export const NavMenuItemLink = styled(NavLink)`
    color: ${props => props.theme.color};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`