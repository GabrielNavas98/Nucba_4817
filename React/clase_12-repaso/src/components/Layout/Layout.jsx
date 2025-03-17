import React from 'react';
import Navbar from '../Navbar/Navbar';
import { ContentContainerStyled, LayoutContainerStyled } from './LayoutStyled';


const Layout = ({ children }) => {
  return (
    <LayoutContainerStyled>
      <Navbar />
      <ContentContainerStyled>{children}</ContentContainerStyled>
      <p style={{color: 'white'}}>NucbaShop</p>
    </LayoutContainerStyled>
  );
};

export default Layout;
