import React, { useState } from "react";
import * as S from './styles';
import { useTheme } from '../../../hook/useTheme'

function FilterListItem({title, onClickTitle}) {
    const [isChecked, setIsChecked] = useState(false)
    const { theme } = useTheme()

    const toggleChecked = () => {
        setIsChecked(prev => !prev)
    }

    return (
        <S.FilterListItem theme={theme}>
            <input type="checkbox" id={title} checked={isChecked} onChange={toggleChecked} />
            <label htmlFor={title} onClick={() => onClickTitle(title)}>{title}</label>
        </S.FilterListItem>
    )
}

export default FilterListItem