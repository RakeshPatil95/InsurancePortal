import AdminSideBar from "./adminsidebar";
import AdminNavBar from "./adminnavbar";
import { useLocation, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const AdminCustomersDetails = (props) => {
  const location = useLocation();

  const navigate=useNavigate()
  let agent = location.state.agent;
  let admin=location.state.admin
  let customer=location.state.customer
  useEffect(() => {
    if (!sessionStorage["token_ADMIN"]) {
      navigate("/signin");
    } 
  }, []);
  return (
    <div className="dashboard d-flex">
      <div>
        <AdminSideBar admin={admin} />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <AdminNavBar adminName={admin.firstName} />
        <h1>Customer Details:</h1>
        <center>
          <h1>
            {customer.firstName} {customer.lastName}
          </h1>
          <br />
          <table
            className="table"
            style={{ width: "60%", border: "2px", borderBlockStyle: "solid" }}
          >
            <tbody style={styles.myfont}>
            <tr>
                <td>Mobile Number</td>
                <td>{customer.phoneNumber}</td>
              </tr>
              <tr>
                <td>Email ID</td>
                <td>{customer.email}</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td>{customer.dateOfBirth}</td>
              </tr>
              <tr>
                <td>AddressLine 1</td>
                <td>{customer.address.addressLine1}</td>
              </tr>
              <tr>
                <td>AddressLine 2</td>
                <td>{customer.address.addressLine2}</td>
              </tr>
              
              <tr>
                <td>PinCode</td>
                <td>{customer.address.pincode}</td>
              </tr>
              <tr>
                <td>Village</td>
                <td>{customer.address.village}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{customer.address.city}</td>
              </tr>
              <tr>
                <td>State</td>
                <td>{customer.address.state}</td>
              </tr>
      
              <tr>
                <td>Adhar Card</td>
                <td>{customer.aadhar}</td>
              </tr>
              <tr>
                <td>Pan Card </td>
                <td>{customer.pan}</td>
              </tr>
            </tbody>
          </table>
        </center>
        <center>
          <Link
            to="/adminAgentsCustomers"
            className="btn btn-success"
            state={{admin:admin,agent:agent}}
            style={{
              backgroundColor: "#FFCB08",
              color: "black",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Back To {agent.firstName}s Customers
          </Link>
        </center>
      </div>
    </div>
  );
};
export default AdminCustomersDetails;
const styles = {
  myfont: {
    textDecoration: "none",
    fontWeight: "bold",
    textAlign: "left",
  },
};
