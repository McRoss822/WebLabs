import React from 'react'
import {Header} from './HomePage/containers/header/Header.js'
import {Footer} from './HomePage/containers/footer/Footer.js'
import {Content} from './HomePage/containers/content/content.js'
import styled from 'styled-components';


export const HomePage = () => {
    return (
        <Page>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </Page>
    );
}

export const Page = styled.div`
`
