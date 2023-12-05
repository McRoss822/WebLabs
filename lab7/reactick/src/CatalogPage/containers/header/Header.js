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


export const Header = () => {
    return(
    <WrappDiv>
        <Logo logoSrc="D:\labs_3_semester\WebLabs\lab6\reactick\src\images\car.jpg"></Logo>
        <Navigation>
            <NavList>
                <li><HomeNavRef  href="/">Home</HomeNavRef></li>
                <li><NavRef  href="/catalog">Catalog</NavRef></li>
                <li><NavRef  href="#">Cart</NavRef></li>
            </NavList>
        </Navigation>
        <SearchBar>
            <SearchInput/>
            <SearchIcon/>
        </SearchBar>
    </WrappDiv>
    )
}