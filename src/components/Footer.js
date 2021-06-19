import styled from "styled-components";

const FooterStyle = styled.footer`
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9em;
    border-top: 1px solid gainsboro;

    a {
        padding-left: 0.35em;
    }
`;

const Footer = () => {
    return (
        <FooterStyle>
            <p>Designed and Developed by</p>
            <a href="https://github.com/vignesh-antony">Vignesh A</a>
        </FooterStyle>
    );
};

export default Footer;
