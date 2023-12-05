import React from 'react'
import {
    ContentWrapper,
    HeadingSect,
    Logo,
    HeadingText,
    ItemsSect,
    ItemList,
    ViewMore,
    ViewDiv
} from './content.style.js';

import {Item} from '../../../components/Item.js' 

export const Content = () => {
    const itemUrl = '../../images/car.jpg'
    return(
        <ContentWrapper>
            <HeadingSect>
                <Logo></Logo>
                <HeadingText>
                    <h4>Heading</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </HeadingText>
            </HeadingSect>
            <ItemsSect>
                <ItemList>
                    <li><Item imageSrc = {itemUrl} itemName="BMW 1" itemInfo="Best Car"></Item></li>
                    <li><Item imageSrc="../../images/car.jpg" itemName="BMW 2" itemInfo="Second Best Car"></Item></li>
                    <li><Item imageSrc="../../images/car.jpg" itemName="BMW 3" itemInfo="Second second Best Car"></Item></li>
                </ItemList>
            </ItemsSect>
            <ViewDiv>
                <ViewMore>View More</ViewMore>
            </ViewDiv>
        </ContentWrapper>
    )
}