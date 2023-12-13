import styled from 'styled-components'

export const ItemWrapper = styled.div`
    height:400px;
    width:320px;
    background-color: #CCCCCC;
    border-radius:20px;
    border:black;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
`
export const ItemImage = styled.img`
    margin-top:10px;
    width:300px;
    height:200px;
    object-fit:cover;
`
export const ItemName = styled.h3`

`
export const ItemInfo = styled.p`
`


{/* <ItemWrapper>
            <ItemImage></ItemImage>
            <ItemName></ItemName>
            <ItemInfo></ItemInfo>
        </ItemWrapper> */}