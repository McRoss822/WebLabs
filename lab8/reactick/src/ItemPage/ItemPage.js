import styled from 'styled-components'
import {Header} from './containers/header/Header'
import {Footer} from './containers/footer/Footer'
import {Content} from './containers/content/Content'
export const ItemPage = () => {
    return(
        <PageWrapper>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </PageWrapper>
    )
}

const PageWrapper = styled.div``