import React from 'react'
import {Header} from './containers/header/Header.js'
import {Footer} from './containers/footer/Footer.js'
import {Content} from './containers/content/content.js'
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
