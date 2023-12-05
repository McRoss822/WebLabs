import React from 'react';
import styled from 'styled-components';
import {Header} from './CatalogPage/containers/header/Header';
import {CatalogContent} from './CatalogPage/containers/content/content'
import {Footer} from './CatalogPage/containers/footer/Footer'
export const CatalogPage = () =>{
    return(
        <Catalog>
            <Header></Header>
            <CatalogContent></CatalogContent>
            <Footer></Footer>
        </Catalog> 
    )
}

const Catalog = styled.div``
