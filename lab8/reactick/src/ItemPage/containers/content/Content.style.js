import styled from 'styled-components';
export {
    ContentWrapper,
    Heading,
    ItemImage,
    Info,
    Characteristics,
    Text,
    ItemName,
    ItemInfo,
    Fields,
    DownPart,
    Price,
    Buttons,
    GoBack,
    AddToCart,
    Field,
    Characteristic
  };

// Content Wrapper
const ContentWrapper = styled.div`
  /* Your styles for ContentWrapper */
`;

// Heading
const Heading = styled.div`
  margin-top:3%;
  display:flex;
  justify-content:start;
  margin-left:5%;
  column-gap: 10%;
`;

// Item Image
const ItemImage = styled.img`
  /* Your styles for ItemImage */
  width:40%;
  height:60%;
`;

// Info
const Info = styled.div`
  /* Your styles for Info */
  width:35%;
  margin-bottom:10%;

`;

// Characteristics
const Characteristics = styled.div`
  /* Your styles for Characteristics */
`;
const Characteristic = styled.div`
  text-align:center;
  width:20%;
  height:10%;
  background-color:#000000;
`
// Text
const Text = styled.div`
  text-align:left;
  margin-bottom:20%;
`;

// Item Name
const ItemName = styled.h1`
  /* Your styles for ItemName */
`;

// Item Info
const ItemInfo = styled.p`
  /* Your styles for ItemInfo */
`;

// Fields
const Fields = styled.div`
  /* Your styles for Fields */
  display:flex;
  gap:5%;
`;

const Field = styled.input`
  border:1px solid #888;
  font-size:36px;
  border-radius:7px;
  padding-top:2%;
  width:80%;
  height:100%;
`

// Down Part
const DownPart = styled.div`
  display:flex;
  justify-content:space-between;
`;

// Price
const Price = styled.div`
margin-left:7%;
  h3{
    font-size:30px;
    font-weight:balder;
  }
`;

// Buttons
const Buttons = styled.div`
  /* Your styles for Buttons */
  display:flex;
  gap:10%;
  padding-right:7%;
  padding-top:2%;

`;

// Go Back Button
const GoBack = styled.button`
  /* Your styles for GoBack */
  width:200px;
  height:50px;
  border-radius:20px;
  font-size:26px;
`;

// Add to Cart Button
const AddToCart = styled.button`
  /* Your styles for AddToCart */
  width:200px;
  height:50px;
  border-radius:20px;
  font-size:26px;
  background-color:#333333;
  color:white;
`;


//     <ContentWrapper>
//       <Heading>
//         <ItemImage />
//         <Info>
//           <Characteristics></Characteristics>
//           <Text>
//             <ItemName />
//             <ItemInfo />
//           </Text>
//           <Fields></Fields>
//         </Info>
//       </Heading>
//       <DownPart>
//         <Price></Price>
//         <Buttons>
//           <GoBack></GoBack>
//           <AddToCart></AddToCart>
//         </Buttons>
//       </DownPart>
//     </ContentWrapper>
//   );

