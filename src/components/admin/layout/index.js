import React from "react";
import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';

import SideBar from "../sidebar";
import HeaderComponent  from "../header";

const Container = styled.div`
  display: flex;
  background-color: white;
  min-height: 100vh;
  flex-direction: column;
`



const MainContainer = styled.div`
  display: flex;
  background-color: green;
  height: 100vh;
  flex: 1;
  flex-direction: column;
  
  ${breakpoint('tablet')`
    flex-direction: row;
  `}
`

const SidebarContainer = styled.div`


  background-color: white;

  flex-basis: auto;
  

  ${breakpoint('mobile')`
    flex-basis: 5em;
  `}

  ${breakpoint('tablet')`
    flex-basis: 15em;
  `}

  ${breakpoint('desktop')`
    flex-basis: 15em;
  `}
`
const RightSidebarContainer = styled.div`

  background-color: orange;

  flex-basis: 1;
  
  ${breakpoint('tablet')`
    flex-basis: 8em;
  `}

  ${breakpoint('desktop')`
    flex-basis: 10em;
  `}
`


const MainContent = styled.div`
  display: flex;
  background-color: gray;

  flex: 1;
  flex-direction: column;
  
  ${breakpoint('tablet')`
    flex-direction: row;
  `}
`


function Layout({ children }) {
  return (
    <Container>
      <HeaderComponent />
      <MainContainer>
        <SidebarContainer>
          <SideBar />
        </SidebarContainer>
        <MainContent>
         {children}   
        </MainContent>
      </MainContainer>
    </Container>
  );
}
export default Layout;
