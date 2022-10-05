import React from "react";
import { HandySvg } from "handy-svg";

import ligthThemeSvg from '../../../img/icon/light_theme.svg'
import darkThemeSvg from '../../../img/icon/dark_theme.svg'

export const LightThemeButton = () => (
    <HandySvg 
        src={ligthThemeSvg}
        alt="light-theme-icon"
        data-theme="light"
    />
)

export const DarkThemeButton = () => (
    <HandySvg 
        src={darkThemeSvg}
        alt="dark-theme-icon"
        data-theme="dark"
    />
)