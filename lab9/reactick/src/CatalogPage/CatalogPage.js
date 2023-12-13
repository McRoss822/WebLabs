import React from 'react';
import styled from 'styled-components';
import {Header} from './containers/header/Header';
import {CatalogContent} from './containers/content/content'
import {Footer} from './containers/footer/Footer'
import { useState } from 'react';

export const CatalogPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
        console.log(newSearchTerm)
    };

    return(
        <Catalog>
            <Header onSearch={handleSearch}></Header>
            <CatalogContent searchTerm={searchTerm} ></CatalogContent>
            <Footer></Footer>
        </Catalog> 
    )
}

const Catalog = styled.div``
