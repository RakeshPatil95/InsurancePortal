import CustomerSideBar from './adminsidebar'
import CustomerNavBar from './adminnavbar';
import "./Dashboard.css";
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
const AdminAgentsCustomersDetails=()=>{
    return(
        <div className="dashboard d-flex">
    	<div>
      	<CustomerSideBar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <CustomerNavBar/>
        <h1 style={{marginBottom:'40px',marginLeft:'10px',textAlign:'center'}}><b>AgentsCustomers</b></h1>
        <Table striped style={{border: '1px solid black',
  borderRadius:'10px',
borderColor: '#96D4D4',}}>
      <thead >
        <tr>
          <th>#</th>
          <th>Customer Name</th>
          <th>Phone No</th>
          <th>Email ID</th>
        </tr>
      </thead>
      <tbody>
              <tr>
          <td>1</td>
          <td>Sagar</td>
          <td>1234567890</td>
          <td>rutsagar@gmail.com</td>
          <td><Link to='/adminAgentsCustomersPolicyDetails' className='btn btn-primary'  style={styles.button}>View Details</Link></td>
        </tr>
        <tr>
        <td>2</td>
          <td>Rakesh</td>
          <td>9579260490</td>
          <td>raka@gmail.com</td>
          <td><Link to='/adminAgentsCustomersPolicyDetails' className='btn btn-primary'  style={styles.button}>View Details</Link></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Prathamesh</td>
          <td>9898989898</td>
          <td>pratham@gmail.com</td>
          <td><Link to='/adminAgentsCustomersPolicyDetails' className='btn btn-primary'  style={styles.button}>View Details</Link></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Vinaya</td>
          <td>9090909090</td>
          <td>chaila@gmail.com</td>
          <td><Link to='/adminAgentsCustomersPolicyDetails' className='btn btn-primary'  style={styles.button}>View Details</Link></td>
        </tr>
      </tbody>
    </Table>
        </div>
        </div>

    )
}
export default AdminAgentsCustomersDetails
const styles={
  button:  {
      borderRadius:'15px',
    }
}