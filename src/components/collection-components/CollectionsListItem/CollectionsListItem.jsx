import React from "react";
import { useNavigate } from "react-router-dom";
import { getCollectionById } from "../../../store/collectionsSlice";
import { useDispatch } from "react-redux";

import * as S from './styles'

const CollectionsListItem = ({id, title, backgroundColor}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onCollectionClick = (num) => {
        dispatch(getCollectionById(num))
        navigate(`collection/${num}`)
    }

    return (
        <S.ListItem 
            $color={backgroundColor} 
            onClick={() => onCollectionClick(id)}
        >
            <S.ItemTitle>{title}</S.ItemTitle>
        </S.ListItem>
    )
}

export default CollectionsListItem

