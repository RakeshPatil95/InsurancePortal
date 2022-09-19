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
const AdminSideBar = (props) => {
  let admin=props.admin;
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
            <NavLink exact to="/admindashboard" activeClassName="activeClicked" state={{admin:admin}}>
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/admincustomers" activeClassName="activeClicked" state={{admin:admin}}>
              <CDBSidebarMenuItem icon="table">My Customers</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminagents" activeClassName="activeClicked" state={{admin:admin}}>
              <CDBSidebarMenuItem icon="table">My Agents</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/newapplications"
              activeClassName="activeClicked"
              state={{admin:admin}}
            >
              <CDBSidebarMenuItem icon="table">
                New Applications
              </CDBSidebarMenuItem>
            </NavLink>
         
            <NavLink
              exact
              to="/adminClaimApplications"
              activeClassName="activeClicked"
              state={{admin:admin}}
            >
              <CDBSidebarMenuItem icon="table">
                New Claims
              </CDBSidebarMenuItem>
            </NavLink>
           
            <NavLink
              exact
              to="/adminSurrenderApplications"
              activeClassName="activeClicked"
              state={{admin:admin}}
            >
              <CDBSidebarMenuItem icon="table">
                New Surrenders
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/adminprofile"
              activeClassName="activeClicked"
              state={{admin:admin}}
            >

              <CDBSidebarMenuItem icon="user">My Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/adminallplans"
              activeClassName="activeClicked"
              state={{admin:admin}}
            >
              <CDBSidebarMenuItem icon="th-large">All Plans</CDBSidebarMenuItem>
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
export default AdminSideBar;
