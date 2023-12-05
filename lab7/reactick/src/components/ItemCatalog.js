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
                <ItemPrice>Price: {price}$</ItemPrice>
            </ItemText>
            <ViewMore>View More</ViewMore>
        </ItemWrapper>
    )
}