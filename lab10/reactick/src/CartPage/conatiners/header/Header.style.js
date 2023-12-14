import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';

export const WrappDiv = styled.header`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    column-gap:200px;
    padding-top:10px;
    margin-top:5px;
    border-bottom: 1px solid #666666
`;

export const Logo = styled.img`
    height: 40px;
    width:40;
    padding-left:40px;
    padding-bottom:1%;
`;


export const Navigation = styled.nav`
`;


export const NavList = styled.ul`
    display:flex;
    justify-content:center;
    flex-direction: row;
    align-self:center;
    gap: 10px 50px;
    list-style-type: none;
    margin:0px auto;
    margin-left:80px;
`;

export const NavRef = styled.a`
    text-decoration: none;
    color:black;
    width:400px;
    column-gap:75px;
    height:100px;
    padding: 10px 50px;
    text-align:center;
`;

export const HomeNavRef = styled(NavRef)`
    background-color: #CCCCCC;
    border-radius: 20px;
    height:50px;
`
export const SearchBar = styled.div`
    position:relative;
`
export const SearchIcon = styled(SearchOutlined)`
position: absolute;
right: 8px; /* Adjust the positioning as needed */
transform: translateY(-140%);
cursor: pointer;
`
export const SearchInput = styled.input`
    border-radius:20px;
    width:160px;
    height:25px;
    margin-left:3%;
`
{/* <WrappDiv>
        <Logo src="./images/card_img.svg"></Logo>
        <Navigation>
            <NavList>
                <li><NavRef>Home</NavRef></li>
                <li><NavRef>Home</NavRef></li>
                <li><NavRef>Home</NavRef></li>
            </NavList>
        </Navigation>
    </WrappDiv> */}