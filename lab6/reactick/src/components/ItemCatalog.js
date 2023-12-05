import React from "react";
import{
    ItemWrapper, 
    ItemImage,
    ItemText, 
    ItemName, 
    ItemDescr, 
    ItemPrice,
    ViewMore
} from './ItemCatalog.style.js'

export const ItemCatalog = ({id, name, description, price }) => {
    return(
        <ItemWrapper>
            <ItemImage></ItemImage>
            <ItemText>
                <ItemName>{name}</ItemName>
                <ItemDescr>{description}</ItemDescr>
                <ItemPrice>{price}</ItemPrice>
            </ItemText>
            <ViewMore></ViewMore>
        </ItemWrapper>
    )
}