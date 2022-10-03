import React from "react";

import * as S from './styles'

const CollectionsListItem = ({title,backgroundColor}) => (
    <S.ListItem $color={backgroundColor}>
        <S.ItemTitle>{title}</S.ItemTitle>
    </S.ListItem>
)

export default CollectionsListItem

