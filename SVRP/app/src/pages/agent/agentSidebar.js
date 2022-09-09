import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
const AgentSidebar = () => {
  return (
    <div style={{ height: "100vh", overflow: "scroll initial" }}>
      <CDBSidebar textColor="#fff" backgroundColor="#004E8F">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <NavLink
            exact
            to="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            SVRP INSURANCE
          </NavLink>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/agentdashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/agentPremiumPayment"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="table">
                Premium Payments
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/agentcustomers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">My Customers</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Invoice</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/agentprofile"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">My Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/agentAllPlans"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="th-large">All Plans</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/agentPolicySummery" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">
                Summery
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
export default AgentSidebar;
