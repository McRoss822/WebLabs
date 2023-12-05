import React from 'react'
import {
    FooterWrap,
    FooterText,
    Logo,
    FooterIcons,
    Line,
    SmallText,
    FooterDivStart,
    FooterEnd
} from './Footer.style.js';

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
                <Logo></Logo>
                <FooterIcons>
                        <li>Facebook</li>
                        <li>YT</li>
                        <li>Twitt</li>
                        <li>G+</li>
                </FooterIcons>
            </FooterDivStart>
            <FooterEnd>
                <Line></Line>
                <SmallText>2023 Iot All rights reserved</SmallText>
            </FooterEnd>
        </FooterWrap>
    )
}