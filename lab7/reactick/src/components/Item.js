import React from 'react'
import {
    ItemImage,
    ItemWrapper,
    ItemName,
    ItemInfo
} from './Item.style'

export const Item = ({itemName, itemInfo, imageSrc}) => {
    return(
        <ItemWrapper>
            <ItemImage src={imageSrc} alt="Car"></ItemImage>
            <ItemName>{itemName}</ItemName>
            <ItemInfo>{itemInfo}</ItemInfo>
        </ItemWrapper>
    )
}