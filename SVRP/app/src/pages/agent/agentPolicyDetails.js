import AgentSideBar from "./agentSidebar";
import AgentNavBar from "./agentNavbar";
import { Link } from "react-router-dom";
import "./Dashboard.css";
const AgentPolicyDetails = () => {
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
        <h1>Details:</h1>
        <center>
          <h1>PolicyDetails</h1>
          <br />

          <table
            className="table"
            style={{ width: "60%", border: "2px", borderBlockStyle: "solid" }}
          >
            <tbody style={styles.myfont}>
              <tr>
                <td>
                  <h4>Policy Name</h4>
                </td>
                <td>
                  <h4>Jeevan Labh</h4>
                </td>
              </tr>
              <tr>
                <td>Policy Holder Name</td>
                <td>Sagar</td>
              </tr>
              <tr>
                <td>Start Date</td>
                <td>20-06-2020</td>
              </tr>
              <tr>
                <td>End Date</td>
                <td>20-03-2030</td>
              </tr>
              <tr>
                <td>Primium</td>
                <td>2000 Rps</td>
              </tr>
              <tr>
                <td>Maturity</td>
                <td>50,00,000 Rps</td>
              </tr>
              <tr>
                <td>Prim Date</td>
                <td>20-06-2022</td>
              </tr>
            </tbody>
          </table>
        </center>
        <center>
          <button
            className="btn btn-success mt-4"
            style={{
              width: "auto",
              borderRadius: "15px",
              backgroundColor: "green",
            }}
          >
            Apply for Policy
          </button>
        </center>
      </div>
    </div>
  );
};
export default AgentPolicyDetails;
const styles = {
  myfont: {
    textDecoration: "none",
    fontWeight: "bold",
    textAlign: "left",
  },
};
