import React from "react";
import CollectionsListItem from '../CollectionsListItem'
import { COLLECTIONS_ITEMS, getRandomColor } from "../../../constants/constants";

import * as S from './styles'

const CollectionsList = () => {
    

    return (
        <S.CollectionsList>
            {
                COLLECTIONS_ITEMS.map((el, i) => (
                    <CollectionsListItem 
                        key={i} 
                        title={el} 
                        backgroundColor={getRandomColor()}
                />))
            }
        </S.CollectionsList>
    )
}

export default CollectionsList