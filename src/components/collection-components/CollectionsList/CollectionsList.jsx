import React from "react";
import { useSelector } from "react-redux";
import CollectionsListItem from '../CollectionsListItem'
import { getRandomColor } from "../../../constants/constants"

import * as S from './styles'

const CollectionsList = () => {
    const { collectionsList } = useSelector(state => state.collections)

    return (
        <S.CollectionsList>
            {
                collectionsList.map(el => (
                    <CollectionsListItem 
                        key={el}
                        id={el} 
                        title={el} 
                        backgroundColor={getRandomColor()}
                />))
            }
        </S.CollectionsList>
    )
}

export default CollectionsList