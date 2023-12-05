import styled from 'styled-components';

// Wrapper div
export const WrappDiv = styled.header`
    display:flex;
    flex-direction:row;
    column-gap: 390px;
    padding-top:10px;
    margin-top:5px;
`;

export const LogoImg = styled.img`
    height: 40px;
    width:40;
    padding-left:40px;
`;

// Logo image
export const Logo = ({logoSrc}) => {
    return <LogoImg src={logoSrc} alt="Logo"></LogoImg>
}


// Navigation container
export const Navigation = styled.nav`
`;

// List for navigation items
export const NavList = styled.ul`
    display:flex;
    justify-content:center;
    flex-direction: row;
    align-self:center;
    gap: 10px 50px;
    list-style-type: none;
    margin:0px auto;
`;

// Navigation reference (link or text)
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