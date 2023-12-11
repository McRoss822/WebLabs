import React, {useState, useContext, useEffect} from "react";
import {ItemCatalog} from '../../../components/ItemCatalog'
import styled from "styled-components";
import { CarsContext } from "../../../App";

export const ItemsCatalog = ({cars}) => {
  
    return (
      <ItemsList>
        {cars.map((car) => (
          <ItemCatalog
            key={car.id}
            id={car.id}
            name={car.name}
            description={car.description}
            price={car.price}
            type={car.type}
            available={car.available}
          />
        ))}
      </ItemsList>
    );
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