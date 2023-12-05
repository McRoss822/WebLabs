import React from "react";
import {ItemCatalog} from '../../../components/ItemCatalog'
import {cars} from '../../../cars_data'
import styled from "styled-components";

export const ItemsCatalog = () => {
    return(
        <ItemsList>
            {cars.map((car)=>{
                return <ItemCatalog 
                        key={car.id}
                        name={car.name}
                        description={car.description}
                        price={car.price}>
                        </ItemCatalog>
                        }
                    )
                }
        </ItemsList>
    )   
}

const ItemsList = styled.ul`
`