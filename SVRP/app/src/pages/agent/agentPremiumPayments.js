import AgentSideBar from "./agentSidebar";
import AgentNavBar from "./agentNavbar";
import "./Dashboard.css";
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
const AgentPremiumPayment=()=>{
    return(
        <div className="dashboard d-flex">
    	<div>
      	<AgentSideBar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <AgentNavBar/>
        <h1 style={{marginBottom:'40px',marginLeft:'10px',textAlign:'center'}}><b>My Policies</b></h1>
        <Table striped style={{border: '1px solid black',
  borderRadius:'10px',
borderColor: '#96D4D4',}}>
      <thead >
        <tr>
          <th>#</th>
          <th>Policy Name</th>
          <th>Policy Id</th>
          <th>Primium</th>
          <th>Premium Date</th>
          <th>Late fee</th>
          <th>Pay</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Jeevan labh</td>
          <td>8732154</td>
          <td>5000</td>
          <td>20-july-2022</td>
          <td>20 Rs</td>
          <td><Link to='/agentPremiumPaynow' className='btn btn-primary' style={styles.button}>Pay Now</Link></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jeevan labh</td>
          <td>8732154</td>
          <td>5000</td>
          <td>20-july-2022</td>
          <td>20 Rs</td>
          <td><Link to='/agentPremiumPaynow' className='btn btn-primary' style={styles.button}>Pay Now</Link></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jeevan labh</td>
          <td>8732154</td>
          <td>5000</td>
          <td>20-july-2022</td>
          <td>20 Rs</td>
          <td><Link to='/agentPremiumPaynow' className='btn btn-primary' style={styles.button}>Pay Now</Link></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jeevan labh</td>
          <td>8732154</td>
          <td>5000</td>
          <td>20-july-2022</td>
          <td>20 Rs</td>
          <td><Link to='/agentPremiumPaynow' className='btn btn-primary' style={styles.button}>Pay Now</Link></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jeevan labh</td>
          <td>8732154</td>
          <td>5000</td>
          <td>20-july-2022</td>
          <td>20 Rs</td>
          <td><Link to='/agentPremiumPaynow' className='btn btn-primary' style={styles.button}>Pay Now</Link></td>
        </tr>
      </tbody>
    </Table>
        </div>
        </div>

    )
}
export default AgentPremiumPayment
const styles={
  button:  {
      borderRadius:'15px',
    }
}