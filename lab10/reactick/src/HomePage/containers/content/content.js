import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
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
import bmw_img from '../../../images/bmw.png';
import {cars} from '../../../car_data.js'
import img from '../../../images/car.jpg';

export const Content = () => {

    const [itemCount, setItemCount] = useState(3);

    const handleView = () => {
        setItemCount(prev => prev + 3)
    }
    // const handleLess = () => {
    //     if (prev => 6){
    //         setItemCount(prev => prev + 3)
    //     }
    // }

    return(
        <ContentWrapper>
            <HeadingSect>
                <Logo src={bmw_img}/>
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
                {cars.slice(0, itemCount).map((car) => (
                    <li><Item itemName={car.name} itemInfo={car.description} imageSrc={img}></Item></li>
                ))}
                </ItemList>
            </ItemsSect>
            <ViewDiv>
                <ViewMore onClick={handleView}>View More</ViewMore>
                {/* <ViewMore onClick={handleLess}>View Less</ViewMore> */}
            </ViewDiv>
        </ContentWrapper>
    )
}