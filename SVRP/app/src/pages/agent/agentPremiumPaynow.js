import AgentSideBar from "./agentSidebar";
import AgentNavBar from "./agentNavbar";
import "./Dashboard.css";
const AgentPaynow=()=>{
    return(
        <div className="dashboard d-flex">
    	<div>
      	<AgentSideBar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"auto"}}>
        <AgentNavBar/>
       
          <center>
          <table className='table table mt-5' style={{width:'35%'}}>
            <thead style={{backgroundColor:'#004E8F',color:'white'}}>
                <tr>
                    <td colSpan='2'>
                    <h1>Payment</h1>
                    </td>
                </tr>
            </thead>
            <tbody style={styles.myfont}>
                <tr>
                    <td>Name :</td>
                    <td>Customer Name </td>
                </tr>
                <tr>
                    <td>Policy :</td>
                    <td>Jeevan Labh</td>
                </tr>
                <tr>
                    <td>Policy Id :</td>
                    <td>225645</td>
                </tr>
                <tr>
                    <td>Ammout :</td>
                    <td>5000 Rs</td>
                </tr>
                <tr>
                    <td>Late Fee :</td>
                    <td>50 Rs</td>
                </tr>
                <tr>
                    <td>Premium No :</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td>Date</td>
                    <td>30 jun 2022</td>
                </tr>
            </tbody>
          </table>
          <button className='btn mt-3' style={styles.button}>Pay Now</button>
          </center>
        </div>
        </div>
       
    )
}
export default AgentPaynow
const styles={
    myfont: {
       
        textDecoration: "none",
        fontWeight: "bold",
        textAlign:"left",
      },
      button:  {
        borderRadius:'15px',
        backgroundColor:'#FFCB08',
        fontWeight:'bold',
        width:'250px'
      }
}