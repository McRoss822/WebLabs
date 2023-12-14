import styled from 'styled-components';
import Icon, {YoutubeOutlined, TwitterOutlined, GooglePlusOutlined, LinkedinOutlined} from '@ant-design/icons';

export const FooterWrap = styled.footer`
  border-top: 2px solid #888;
  display:flex;
  flex-direction:column;
`;

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

export const Logo = styled.img`
  /* Styles for the logo */
  width: 150px;
  height: 150px;
  background-color: #ccc;
  margin-top:20px;
`;

export const FooterIcons = styled.ul`
  /* Styles for the footer icons container */
  list-style: none;
  margin-top:50px;
  margin-right:80px;
  padding-left:13%;
  display: flex;
  gap: 40px;
  a{
    text-decoration:none;}

`;
export const IcoWr = styled.div`
  a{
    position:absolute;
    display:none;

}
`
export const Icon1 = styled(YoutubeOutlined)`
  position:relative;
`
export const Icon2 = styled(TwitterOutlined)``
export const Icon3 = styled(GooglePlusOutlined)``
export const Icon4 = styled(LinkedinOutlined)``

export const Line = styled.hr`
  /* Styles for the horizontal line */
  border-top: 2px solid #888;
  margin: 20px auto;
  width:1300px;

`;

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

