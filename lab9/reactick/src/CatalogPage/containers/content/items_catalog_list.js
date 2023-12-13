import React, {useState, useContext, useEffect} from "react";
import {ItemCatalog} from '../../../components/ItemCatalog'
import styled, {keyframes} from "styled-components";
import { Spin } from 'antd';


export const ItemsCatalog = ({cars}) => {
    if(cars.length===0){
      return <Spin size="large"/>
    }else {
    return (
      <ItemsList>
        {cars.map((car) => (
          <ItemCatalog
            key={car.id}
            id={car.id}
            image={car.image}
            name={car.name}
            description={car.description}
            price={car.price}
            type={car.type}
            available={car.available}
          />
        ))}
      </ItemsList>
    );
  }
  };
  
  export default ItemsCatalog;

  
const ItemsList = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 20px;
grid-row-gap: 80px;
justify-items: center;
list-style-type:none;
margin-right:5%;
`

const load8 = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  animation: ${load8} 1.1s infinite linear;
`