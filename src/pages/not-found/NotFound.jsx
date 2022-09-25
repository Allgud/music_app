import React from "react";
import { NavMenuItemLink } from "../../components/nav-components/NavMenuItem/styles";

function NotFound() {
    return (
        <>
            <h1>Страница не найдена</h1>
            <NavMenuItemLink to={'/tracks'}>Вернуться на главную</NavMenuItemLink>
        </>
    )
}

export default NotFound