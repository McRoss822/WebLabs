import React from "react";
import {
    WrappDiv,
    Logo,
    Navigation,
    NavList,
    NavRef,
    HomeNavRef
} from './Header.style.js'
import bmw_img from '../../../images/bmw.png';

export const Header = () => {
    return(
    <WrappDiv>
        <Logo src={bmw_img} alt="logo"/>
        <Navigation>
            <NavList>
                <li><HomeNavRef  href="/">Home</HomeNavRef></li>
                <li><NavRef  href="/catalog">Catalog</NavRef></li>
                <li><NavRef  href="/cart">Cart</NavRef></li>
            </NavList>
        </Navigation>
    </WrappDiv>
    )
}