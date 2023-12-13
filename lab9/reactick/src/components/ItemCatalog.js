import React from "react";
import{
    ItemWrapper, 
    ItemImage,
    ItemText, 
    ItemName, 
    ItemDescr, 
    ItemPrice,
    ViewMore
} from './ItemCatalog.style.js'
import car_img from '../images/car.jpg';
import { useNavigate } from "react-router-dom";
import { createContext } from "react";

export const ItemCatalog = ({id, name, description, price, type, available, image }) => {

    const ItemContext = createContext()

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/catalog/${id}`,  { state: { car: { id, name, description, price, type, available } } });
    };

    return(
        <ItemWrapper >
            <ItemImage src={car_img}/>
            <ItemText>
                <ItemName>{name}</ItemName>
                <ItemDescr>
                    {description}
                    <h4>Type: {type}</h4>
                    <h4>{available}</h4>
                </ItemDescr>
                <ItemPrice>Price: {price}$</ItemPrice>
            </ItemText>
            <ViewMore onClick={handleButtonClick} >View More</ViewMore>
        </ItemWrapper>
    )
}