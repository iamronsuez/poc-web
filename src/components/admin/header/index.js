import React from "react";
import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';


const Header = styled.div`
  background-color: white;
  display: flex;
  min-width: 100vw;
  height: 7vh;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e8dbdb;
`


const HeaderComponent = () => {
    return (
        <Header>
            hola soy un header
        </Header>
    )
}

export default HeaderComponent;