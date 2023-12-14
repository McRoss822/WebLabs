import React from "react";
import {
    WrappDiv,
    Logo,
    Navigation,
    NavList,
    NavRef,
    HomeNavRef,
    SearchBar,
    SearchInput,
    SearchIcon
} from './Header.style.js'
import bmw_img from '../../../images/bmw.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = ({onSearch}) => {
    
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        onSearch(newSearchTerm);
        console.log(newSearchTerm) // Call the onSearch function from parent with the new search term
    };
      
    return(
    <WrappDiv>
        <Logo src={bmw_img}></Logo>
        <Navigation>
            <NavList>
                <li><HomeNavRef  href="/">Home</HomeNavRef></li>
                <li><NavRef  href="/catalog">Catalog</NavRef></li>
                <li><NavRef  href="/cart">Cart</NavRef></li>
            </NavList>
        </Navigation>
        <SearchBar>
          <SearchInput
           placeholder="Search cars..."
           value={searchTerm}
           onChange={handleSearchChange}
           />
            <SearchIcon/>
        </SearchBar>
    </WrappDiv>
    )
}