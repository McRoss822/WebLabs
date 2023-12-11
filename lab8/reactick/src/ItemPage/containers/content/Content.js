import React from "react";
import {
    ContentWrapper,
    Heading,
    ItemImage,
    Info,
    Characteristics,
    Text,
    ItemName,
    ItemInfo,
    Fields,
    DownPart,
    Price,
    Buttons,
    GoBack,
    AddToCart,
    Field,
    Characteristic
  } from '../content/Content.style'
import { useLocation, useNavigate } from "react-router-dom";

import car_img from '../../../images/car.jpg'
import styled from "styled-components";

export const Content = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1); // This function navigates back in the history stack
    };

    // const cars = useContext(CarsContext)
  const location = useLocation();
  const { car } = location.state || {};

  // Use the car details to display information in the Content component
  const { id, name, description, price, type, available } = car || {};

    return(
        <ContentWrapper>
            <Heading>
                <ItemImage src={car_img}/>
                <Info>
                    <Characteristics>
                        <Characteristic></Characteristic>
                        <Characteristic></Characteristic>
                    </Characteristics>
                    <Text>
                        <ItemName>{name}</ItemName>
                        <ItemInfo>
                            {description}
                            <h2>Type:{type}</h2>
                        </ItemInfo>
                    </Text>
                    <Fields>
                        <FieldInput fieldType="Countable Field"/>
                        <FieldSelect/>
                    </Fields>
                </Info>
                </Heading>
            <DownPart>
                <Price><h3>Price:{price}$</h3></Price>
                <Buttons>
                <GoBack onClick={handleGoBack}>Go Back</GoBack>
                <AddToCart>Add To Cart</AddToCart>
                </Buttons>
            </DownPart>
        </ContentWrapper>
    )
}

const FieldInput = ({fieldType}) =>{
    return(
        <FieldWrapp>
            <h3>{fieldType}</h3>
            <Field type = "number" placeholder ="1337"></Field>
        </FieldWrapp>
    )
}
const FieldSelect = () =>{
    return(
        <FieldWrapp>
            <h3>Selectable Field</h3>
            <FieldSelectable></FieldSelectable>
        </FieldWrapp>
    )
}

const FieldWrapp = styled.div`
display:flex;
flex-direction:column;
width:70%;
h3{
    width:60%;
}
`
const FieldSelectable = styled.select`
border:1px solid #888;
font-size:36px;
border-radius:7px;
padding-top:2%;
width:80%;

`