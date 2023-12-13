import React from 'react'
import {
    FooterWrap,
    FooterText,
    Logo,
    FooterIcons,
    Line,
    SmallText,
    FooterDivStart,
    FooterEnd,
    Icon1,
    Icon2,
    Icon3,
    Icon4
} from './Footer.style.js';
import bmw_img from '../../../images/bmw.png';

export const Footer = () => {
    return(
        <FooterWrap>
            <FooterDivStart>
                <FooterText>
                    <h3>Branding Stuff</h3>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua.</p>
                </FooterText>
                <Logo src={bmw_img} alt="Logo" />
                <FooterIcons>
                        <a href="https://www.youtube.com/"><Icon1></Icon1></a>
                        <Icon2></Icon2>
                        <Icon3></Icon3>
                        <Icon4></Icon4>
                </FooterIcons>
            </FooterDivStart>
            <FooterEnd>
                <Line></Line>
                <SmallText>2023 Iot All rights reserved</SmallText>
            </FooterEnd>
        </FooterWrap>
    )
}