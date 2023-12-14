import React from "react";
import {Header} from "./conatiners/header/Header"
import styled from "styled-components";
import {Footer} from "./conatiners/footer/Footer"
import { CartContent } from "./conatiners/content/Content";
// import {Conten}
export const CartPage = () =>{
    return(
        <Page>
            <Header></Header>
            <CartContent></CartContent>
            <Footer></Footer>
        </Page>
    )
}

const Page = styled.div``
