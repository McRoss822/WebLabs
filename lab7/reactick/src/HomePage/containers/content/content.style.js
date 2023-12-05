import styled from 'styled-components';

export const ContentWrapper = styled.div`
  /* Your styles for the content wrapper */
  padding: 30px;
  margin:40px auto
  width:1200px;
`;

export const HeadingSect = styled.div`
  /* Styles for the heading section */
  display: flex;
  justify-content:start;
  column-gap: 80px;
  padding-left:40px;
`;


export const Logo = styled.img`
  /* Styles for the logo */
  width: 400px;
  height: 400px;
  background-color: #ccc;
`;

export const HeadingText = styled.div`


  h4{
    margin-top:10px;
    font-size:32px;
    magin:0;
  }

  p{
    width:800px;
    font-size:20px;
  }
`;

export const ItemsSect = styled.div`
  margin-top:160px;
`;

export const ItemList = styled.ul`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  list-style-type: none;
  padding-right:40px;
`;

export const ViewDiv = styled.div`
  display:flex;
  justify-content:center;
  margin-bottom:170px;
  margin-top:60px;
`

export const ViewMore = styled.button`
  margin:0 auto;
  background-color:#444444;
  color:white;
  font-size:18px;
  font-weight:bolder;
  padding: 20px 60px;
  border-radius:20px;
  border:none;
`
// // Individual item
// export const Item = styled.div`
//   /* Styles for the individual item */
//   background-color: #fff;
//   border: 1px solid #ccc;
//   padding: 10px;
//   margin-bottom: 10px;
// `;

{/* <ContentWrapper>
            <HeadingSect>
                <Logo></Logo>
                <HeadingText>
                    <h4>Heading</h4>
                    <p></p>
                </HeadingText>
            </HeadingSect>
            <ItemsSect>
                <ItemList>
                    <li><Item></Item></li>
                    <li><Item></Item></li>
                    <li><Item></Item></li>
                </ItemList>
            </ItemsSect>
        </ContentWrapper> */}