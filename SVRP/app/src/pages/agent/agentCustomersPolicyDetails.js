import AgentSideBar from "./agentSidebar";
import AgentNavBar from "./agentNavbar";
import "./Dashboard.css";
const AgentCustomersPolicyDetails = () => {
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
          <table className="table" style={{ width: "60%" }}>
            <tr>
              <td>
                <button
                  className="btn btn-success mt-4"
                  style={{
                    width: "350px",
                    borderRadius: "15px",
                    backgroundColor: "green",
                  }}
                >
                  Claim
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger mt-4"
                  style={{
                    width: "350px",
                    borderRadius: "15px",
                    backgroundColor: "red",
                  }}
                >
                  Surrender
                </button>
              </td>
            </tr>
          </table>
        </center>
      </div>
    </div>
  );
};
export default AgentCustomersPolicyDetails;
const styles = {
  myfont: {
    textDecoration: "none",
    fontWeight: "bold",
    textAlign: "left",
  },
};
