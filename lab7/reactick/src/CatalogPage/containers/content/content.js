import React from "react";
import {
    ContentWrapper,
    FilterDiv,
    Filters,
    ApplyButton,
} from './content.style'
import { ItemsCatalog } from './items_catalog_list';
import {FilterBox} from '../../../components/FilterBox'

export const CatalogContent = () => {
    return(
        <ContentWrapper>
            <FilterDiv>
                <Filters>
                    <FilterBox placeholder="Filter by Name" disabled></FilterBox>
                    <FilterBox placeholder="Filter by Price" disabled></FilterBox>
                    <FilterBox placeholder="Filter by Whatever" disabled></FilterBox>
                </Filters>
                <ApplyButton>Apply Button</ApplyButton>
            </FilterDiv>
            <ItemsCatalog></ItemsCatalog>
        </ContentWrapper>
    )
}