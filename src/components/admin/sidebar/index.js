import React from "react";
import styled from "styled-components";

import { Route, NavLink } from 'react-router-dom'

const Sidebar = styled.div`
    background-color: white;
`

const SidebarContainer = styled.ul`

    margin: 0;
    padding: 0;

    a {
        text-decoration: none;
        color: black;
    }

    a:visited {
        text-decoration: none;
    }
`

const SidebarItem = styled.li`
    background-color: white;
    padding: 0px;
    margin: 0px;
    border-bottom: 1px solid #f3eded;

    :hover {
        background-color: #f3eded;
        cursor: pointer;
    }
    
    a {
        color: #5f5e5e;
        display: flex;
        padding: 20px;
    }

    a.active {
        color: black;
    }
`

const routes = [
    { link: '/admin', name: 'Home' },
    { link: '/admin/service', name: 'Service' }
]

function SidebarComponent() {
    return (
        <Sidebar>
            <SidebarContainer>
                {routes.map(({link, name}) => (
                    <SidebarItem>
                        <NavLink activeClassName="active" to={link} exact>{name}</NavLink>
                    </SidebarItem>
                ))}
            </SidebarContainer>
        </Sidebar>
    )
}

export default SidebarComponent;
