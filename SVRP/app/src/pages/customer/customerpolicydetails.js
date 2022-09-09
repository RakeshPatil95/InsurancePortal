import CustomerSideBar from './customersidebar'
import CustomerNavBar from './customernavbar';
import "./Dashboard.css";
const CustomerPolicyDetails=()=>{
    return(
        <div className="dashboard d-flex">
    	<div>
      	<CustomerSideBar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <CustomerNavBar/>
        <h1 >Policy Detail :</h1>
        <center>
             <h1>Jeevan Labh</h1>
             <br />

        <table className='table'  style={{width:'60%',border:'2px',borderBlockStyle:'solid'}}>
 
       
 
  <tbody style={styles.myfont}>
    <tr>
      <td><h4>Name</h4></td>
      <td><h4>Customer Name</h4></td>
    </tr>
    <tr>
      <td>Start Date</td>
      <td>20 Jan 2020</td>
    </tr>
    <tr>
    <td>End Date</td>
      <td>20 Jan 2030</td>
    </tr>
    <tr>
    <td>Premium</td>
      <td>2000 Rs/mo</td>
    </tr>
    <tr>
    <td>Maturity</td>
      <td>5,00,000 Rs</td>
    </tr>
    <tr>
    <td>Premium No</td>
      <td>27</td>
    </tr>
    <tr>
    <td>Premium Date</td>
      <td>20 july 2022</td>
    </tr>
    </tbody>
    
</table>
<button className='btn btn-danger mt-3' style={{width:'350px',borderRadius:'15px'}}>Surrender</button>
        </center>

        </div>
        </div>

    )
}
export default CustomerPolicyDetails
const styles={
    myfont: {
       
        textDecoration: "none",
        fontWeight: "bold",
        textAlign:"left",
      },
}