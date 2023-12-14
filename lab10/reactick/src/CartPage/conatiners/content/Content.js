import React from "react";
import { CartWrapp, ShoppingTitle,ItemList,
TotalPrice,Buttons,BackToCatalog } from "./Content.style";
import { useSelector } from "react-redux";
import {CartItem} from '../../cart_item'
import styled from "styled-components";

export const CartContent = () => {
    const cartItems = useSelector(state => state.cart.cart);

    return(
        <CartWrapp>
            <ShoppingTitle>Shopping Cart</ShoppingTitle>
            <ItemList>
                {cartItems.map((item)=>{
                    return(
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        type={item.type}
                        available={item.available}
                        image={item.image}
                        count={item.count}
                      />
                      )
                })}
                {/* <CartItem></CartItem> */}
            </ItemList>
            <DownSect>
            <TotalPrice>
                Total Price:{cartItems.reduce((total, item) => total + parseInt(item.price) * parseInt(item.count), 0)}
            </TotalPrice>
            <Buttons>
                <a href="/catalog"><BackToCatalog>Back To Catalog</BackToCatalog></a>
            </Buttons>
            </DownSect>
        </CartWrapp>
    )
}

const DownSect = styled.div`
display:flex;
justify-content:space-between;
`