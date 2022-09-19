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
const AgentSidebar = (props) => {
  let agent=props.agent;
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
            <NavLink exact to="/agentdashboard" state={{agent:agent}} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/agentPremiumPayment"
              activeClassName="activeClicked"
              state={{agent:agent}}
            >
              <CDBSidebarMenuItem icon="table">
                Premium Payments
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/agentcustomers" state={{agent:agent}} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">My Customers</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/agentAppliedPolicies" activeClassName="activeClicked" state={{agent:agent}}>
              <CDBSidebarMenuItem icon="table">Appied Policies</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/agentprofile"
              activeClassName="activeClicked"
              state={{agent:agent}}
            >
              <CDBSidebarMenuItem icon="user">My Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/agentAllPlans"
              activeClassName="activeClicked"
              state={{agent:agent}}
            >
              <CDBSidebarMenuItem icon="th-large">All Plans</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/agentCustomerPolicyHistory" state={{agent:agent}} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">
                Policy History
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
