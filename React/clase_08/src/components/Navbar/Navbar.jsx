import React from 'react';
import { LinkContainer, Logo, NavbarContainer, NavLinkStyled } from './NavbarStyles';

const Navbar = () => {
  
  return (
    <NavbarContainer>
      <Logo>
        <img
          src='https://image.typedream.com/cdn-cgi/image/width=384,format=auto,fit=scale-down,quality=85/https://api.typedream.com/v0/document/public/ac4f6f0d-8160-4e58-9d18-cb5e7c880fb6_Recurso_32_png.png'
          alt=''
        />
      </Logo>

      <LinkContainer>
        <NavLinkStyled to='/'>Home</NavLinkStyled>
        <NavLinkStyled to='/products'>Productos</NavLinkStyled>
        <NavLinkStyled to='/login'>Login</NavLinkStyled>
      </LinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
