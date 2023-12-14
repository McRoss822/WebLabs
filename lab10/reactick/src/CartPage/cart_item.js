import React from 'react'
import car_img from '../images/car.jpg'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { removeFromCart, incrementCount, decrementCount } from "../reducers/cartSlice";

export const CartItem = ({id, name, description, price, type, available, image, count }) =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

      const handleIncrement = () => {
        dispatch(incrementCount(id));
      };
    
      const handleDecrement = () => {
        dispatch(decrementCount(id));
      };
      const handleButtonClick = () => {
        navigate(`/catalog/${id}`, { state: { car: { id, name, description, price, type, available }}});
    };

    const handleDelete = () =>{
      dispatch(removeFromCart(id));
  
    }
    return(
        <ItemWrapper>
            <ItemImage src={car_img} alt="Car"></ItemImage>
            <ItemName onClick={handleButtonClick}>{name}</ItemName>
            <ItemCount>
                <Plus onClick={handleIncrement}>+</Plus>
                <h2>{count}</h2>
                <Minus onClick={handleDecrement}>-</Minus>
            </ItemCount>
            <ItemPrice>Price:{price}$ </ItemPrice>
            <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        </ItemWrapper>
    )
}

const ItemCount = styled.h3``

const Plus = styled.button`
`
const DeleteButton = styled.button`
background-color: black;
font-color:white;`
const Minus = styled.button`
`


const ItemWrapper = styled.div`
    display:flex;
    background-color:#CCCCCC;
    width:100%;
    justify-content:space-between;
`
const ItemName = styled.h2`
  margin-right:25%;
  cursor:pointer;
`

const ItemImage = styled.img`

`
const ItemPrice = styled.h3`
margin-right:5%;

`
