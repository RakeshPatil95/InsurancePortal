import CustomerSideBar from './customersidebar'
import CustomerNavBar from './customernavbar';
import "./Dashboard.css";
import Table from 'react-bootstrap/Table'
import {Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const CustomerPolicies=()=>{
  const Navigate=useNavigate();
    return(
        <div className="dashboard d-flex">
    	<div>
      	<CustomerSideBar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <CustomerNavBar/>
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
          <th>Period</th>
          <th>Tenure</th>
          <th>Details</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Jeevan labh</td>
          <td>8732154</td>
          <td>5000</td>
          <td>15 years</td>
          <td>20 Lakhs</td>
          <td><Link to='/customerpolicydetails' className='btn btn-primary'  style={styles.button}>View Details</Link></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jeevan labh</td>
          <td>8732154</td>
          <td>5000</td>
          <td>15 years</td>
          <td>20 Lakhs</td>
          <td><Link to='/customerpolicydetails' className='btn btn-primary'  style={styles.button}>View Details</Link></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jeevan labh</td>
          <td>8732154</td>
          <td>5000</td>
          <td>15 years</td>
          <td>20 Lakhs</td>
          <td><Link to='/customerpolicydetails' className='btn btn-primary'  style={styles.button}>View Details</Link></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jeevan labh</td>
          <td>8732154</td>
          <td>5000</td>
          <td>15 years</td>
          <td>20 Lakhs</td>
          <td><Link to='/customerpolicydetails' className='btn btn-primary'  style={styles.button}>View Details</Link></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jeevan labh</td>
          <td>8732154</td>
          <td>5000</td>
          <td>15 years</td>
          <td>20 Lakhs</td>
          <td><Link to='/customerpolicydetails' className='btn btn-primary'  style={styles.button}>View Details</Link></td>
        </tr>
      </tbody>
    </Table>
        </div>
        </div>

    )
}
export default CustomerPolicies
const styles={
  button:  {
      borderRadius:'15px',
    }
}