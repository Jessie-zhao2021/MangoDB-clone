import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    grid-column: span 12;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 40px;

    .logo {
        width: 110px;
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <a href='http://www.mongodb.com'>
                <img className='logo' src='https://webimages.mongodb.com/_com_assets/cms/kuyj3d95v5vbmm2f4-horizontal_white.svg?auto=format%252Ccompress'/>
            </a>
        </HeaderContainer>
    )
}

export default Header;
