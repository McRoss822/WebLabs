import styled from 'styled-components';

// Wrapper for the entire footer
export const FooterWrap = styled.footer`
  border-top: 2px solid #888;
  display:flex;
  flex-direction:column;
`;

// Container for the footer text
export const FooterText = styled.div`
  /* Styles for the footer text container */
  margin-bottom: 20px;
  margin-left:60px;

  h3 {
    /* Styles for the h3 heading */
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    /* Styles for the paragraph */
    font-size: 16px;
    line-height: 1.5;
    width:400px;
  }
`;

// Logo
export const Logo = styled.img`
  /* Styles for the logo */
  width: 150px;
  height: 150px;
  background-color: #ccc;
  margin-top:20px;
`;

// Container for the footer icons
export const FooterIcons = styled.ul`
  /* Styles for the footer icons container */
  list-style: none;
  margin-right:80px;
  padding-left:90px;
  display: flex;
  gap: 40px;

  li {
    /* Styles for individual icon items */
    /* Add specific styles for each icon */
    background-color: #555;
    cursor: pointer;
    width:40px;
    height:40px;
  }
`;

// Horizontal line
export const Line = styled.hr`
  /* Styles for the horizontal line */
  border-top: 2px solid #888;
  margin: 20px auto;
  width:1300px;

`;

// Small text at the bottom
export const SmallText = styled.p`
  /* Styles for the small text at the bottom */
  font-size: 14px;
  text-align: center;
  color: #aaa;
`;

export const FooterDivStart = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  gap:200px;
`

export const FooterEnd = styled.div``

