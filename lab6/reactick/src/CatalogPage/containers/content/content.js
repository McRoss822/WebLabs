import React from "react";
import {
    ContentWrapper,
    FilterDiv,
    Filters,
    ApplyButton,
} from './content.style'
import { ItemsCatalog } from './items_catalog_list';

export const CatalogContent = () => {
    return(
        <ContentWrapper>
            <FilterDiv>
                <Filters></Filters>
                <ApplyButton></ApplyButton>
            </FilterDiv>
            <ItemsCatalog></ItemsCatalog>
        </ContentWrapper>
    )
}