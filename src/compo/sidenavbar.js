import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '150vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="black" backgroundColor="	#FBDE44FF">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
        
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/holiday" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="file-alt">Holiday Plans</CDBSidebarMenuItem>
            </NavLink>

          
          
        
          </CDBSidebarMenu>
        </CDBSidebarContent>

      </CDBSidebar>
    </div>
  );
};



