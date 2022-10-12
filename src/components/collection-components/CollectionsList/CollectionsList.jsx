import React from "react";
import CollectionsListItem from '../CollectionsListItem'
import { COLLECTIONS_ITEMS, getRandomColor } from "../../../constants/constants";

import * as S from './styles'

const CollectionsList = () => {
    

    return (
        <S.CollectionsList>
            {
                COLLECTIONS_ITEMS.map(el => (
                    <CollectionsListItem 
                        key={el.id} 
                        title={el.title} 
                        backgroundColor={getRandomColor()}
                />))
            }
        </S.CollectionsList>
    )
}

export default CollectionsList