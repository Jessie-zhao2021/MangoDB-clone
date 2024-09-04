import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.footer`
    grid-column: span 12;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
    padding-bottom: 32px;
`;

const CopyRight = styled.span`
    font-size: 14px;
    line-height: 16px;
    flex: 1;
    color: #fff;
    font-family: EuclidCircularA;
`;

const Link = styled.a`
    font-family: EuclidCircularA;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    line-height: 32px;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    &:not(:last-of-type):after {
        content: " • ";
        padding-left: 10px;
        padding-right: 10px;
        font-size: 14px;
        line-height: 16px;
        color: #fff;
    }
`;

function Footer(){
    return(
        <FooterContainer>
            <CopyRight>© 2024 MongoDB, Inc.</CopyRight>
            <Link tabIndex="0" href="https://www.mongodb.com/contact" target="_blank">Contact</Link>
            <Link tabIndex="0" href="https://www.mongodb.com/legal/privacy-policy" target="_blank">Privacy Policy</Link>
            <Link tabIndex="0" href="https://cloud.mongodb.com/links/terms-of-service" target="_blank">Terms & Conditions</Link>
        </FooterContainer>
    )
}

export default Footer;