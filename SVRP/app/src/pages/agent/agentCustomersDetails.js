import AgentSideBar from './agentSidebar'
import AgentNavBar from './agentNavbar'
import './Dashboard.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
const AgentCustomersDetails = () => {
  let location = useLocation()

  let agent = location.state.agent
  let customer = location.state.customer
  const Navigate = useNavigate()
  const [token, setToken] = useState(sessionStorage.getItem('token_AGENT'))

  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  if (token == null) {
    toast.error('Unauthorized access please login first')
    Navigate('/signin')
  }
  return (
    <div className="dashboard d-flex">
      <div>
        <AgentSideBar agent={agent} />
      </div>
      <div
        style={{
          flex: '1 1 auto',
          display: 'flex',
          flexFlow: 'column',
          height: '100vh',
          overflowY: 'auto',
        }}
      >
        <AgentNavBar agent={agent} />
        <h1>Details:</h1>

        <center>
          <h1>
            {customer.firstName} {customer.lastName}
          </h1>
          <br />

          <table
            className="table"
            style={{ width: '60%', border: '2px', borderBlockStyle: 'solid' }}
          >
            <tbody style={styles.myfont}>
              <tr>
                <td>Adhar Card</td>
                <td>{customer.aadhar}</td>
              </tr>
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
                <td>Pan Card </td>
                <td>{customer.pan}</td>
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
                <td>AddressLine 1</td>
                <td>{customer.address.addressLine1}</td>
              </tr>
              <tr>
                <td>AddressLine 2</td>
                <td>{customer.address.addressLine2}</td>
              </tr>
            </tbody>
          </table>
        </center>
        <center>
          <Link
            to="/agentCustomerPolicies"
            className="btn btn-success"
            state={{agent:agent,customer:customer}}
            style={{
              backgroundColor: '#FFCB08',
              color: 'black',
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            View Policies
          </Link>
        </center>
      </div>
    </div>
  )
}
export default AgentCustomersDetails
const styles = {
  myfont: {
    textDecoration: 'none',
    fontWeight: 'bold',
    textAlign: 'left',
  },
}
