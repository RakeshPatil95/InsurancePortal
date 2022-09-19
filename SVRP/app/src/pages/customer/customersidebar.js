import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const CustomerSideBar = () => {
  let location=useLocation()
  let customer=location.state.customer
    return(
        
            <div style={{  height: '100vh', overflow: 'scroll initial' }}>
              <CDBSidebar textColor="#fff" backgroundColor="#004E8F">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                  <NavLink exact to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                    SVRP INSURANCE
                  </NavLink>
                </CDBSidebarHeader>
        
                <CDBSidebarContent className="sidebar-content">
                  <CDBSidebarMenu>
              <NavLink exact to="/customerdashboard" state={{ customer: customer }} activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/customerpolicies"  state={{ customer: customer }} activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="table">My Policies</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/customerAppliedPolicy"  state={{ customer: customer }} activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="table">Applied Policies</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/customerpremiumpayments"  state={{ customer: customer }} activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="credit-card">Premium Payments</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/customerprofile" state={{ customer: customer }}  activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="user">My Profile</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/customerallplans" state={{ customer: customer }} activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="th-large">All Plans</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/customerAllPlansForMe" state={{ customer: customer }} activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="th-large">Plans For Me</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/customerPolicyHistory" state={{ customer: customer }} activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon="th-large">Policy History</CDBSidebarMenuItem>
                    </NavLink>
        
                   
                  </CDBSidebarMenu>
                </CDBSidebarContent>
        
                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      padding: '20px 5px',
                    }}
                  >
                    Sidebar Footer
                  </div>
                </CDBSidebarFooter>
              </CDBSidebar>
            </div>
        
    )
}
export default CustomerSideBar