import AgentSideBar from "./agentSidebar";
import AgentNavBar from "./agentNavbar";
import "./Dashboard.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
const AgentPolicySummery = () => {
  return (
    <div className="dashboard d-flex">
      <div>
        <AgentSideBar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <AgentNavBar />
        <h1
          style={{
            marginBottom: "40px",
            marginLeft: "10px",
            textAlign: "center",
          }}
        >
          <b>Summery</b>
        </h1>
        <Table
          striped
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            borderColor: "#96D4D4",
          }}
        >
          <thead>
            <tr>
              <th>Policy Name</th>
              <th>Maturity Date</th>
              <th>Inversted Amount</th>
              <th>Amount On Maturity</th>
              <th>Inversted Surrender</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jeevan Utkarsh</td>
              <td>2018-09-12</td>
              <td>INR 5000</td>
              <td>INR 60,000</td>
              <td>INR 5250.0</td>
            </tr>
            <tr>
              <td>Jeevan Utkarsh</td>
              <td>2018-09-12</td>
              <td>INR 5000</td>
              <td>INR 60,000</td>
              <td>INR 5250.0</td>
            </tr>
            <tr>
              <td>Jeevan Utkarsh</td>
              <td>2018-09-12</td>
              <td>INR 5000</td>
              <td>INR 60,000</td>
              <td>INR 5250.0</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default AgentPolicySummery;
const styles = {
  button: {
    borderRadius: "15px",
  },
};
