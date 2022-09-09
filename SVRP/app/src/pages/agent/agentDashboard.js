import AgentSideBar from './agentSidebar'
import AgentNavBar from './agentNavbar';
import React from "react";
import {Row,Col,Card, Button} from 'react-bootstrap'
import { Navigate, useNavigate, Link } from 'react-router-dom';
import {
  CDBBtn,
  CDBProgress,
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBContainer,
  CDBLink } from "cdbreact";
import { Pie, Bar } from "react-chartjs-2";

import "./Dashboard.css";

const AgentDashboard = () => {
	const Navigate=useNavigate();

  const data = {
    chart1:{
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: [
            "#F2C94C",
            "#2F80ED",
            "#9B51E0",
          ],
          borderWidth: 0,
          data: [9, 22, 7],
        },
      ]
    },
    chart2:{
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running",
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255, 153, 51, 0.8)",
          borderColor: "rgb(102, 51, 0)",
          data: [65, 59, 75, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: "#2F80ED",
          borderColor: "rgb(0, 41, 102)",
          data: [38, 48, 60, 79, 96, 47, 80],
        },
      ]
    }
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {display:false}, 
    scales: {
      xAxes: [{
        ticks: {
          display: false
        }, 
      }],
      yAxes: [{
        gridLines: {
          display:false
        },
        ticks: {
          display: false
        }
      }]
    }
  }


  return (
  
    <div className="dashboard d-flex">
    	<div>
      	<AgentSideBar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <AgentNavBar/>
		<Row>
		<Col className='col-6'>
		<Card border="primary" style={{ marginRight:'10px',margin:'10px',backgroundColor:'lightblue'}}>
  
    <Card.Body>
      <Card.Title>My Customers</Card.Title>
     
    </Card.Body>
     <Card.Footer> <Link to='/agentCustomers' className='btn '>View Details</Link></Card.Footer>
  </Card>
		</Col>
		<Col className='col-6'>
		<Card border="primary" style={{ margin:'10px',backgroundColor:'lightyellow'}}>
   
    <Card.Body>
      <Card.Title>Premium Payments</Card.Title>
      
    </Card.Body>
	<Card.Footer> <Link to='/agentPremiumPayment' className='btn '>View Details</Link></Card.Footer>
  </Card>
		</Col>
		</Row>
		<Row>
		<Col className='col-6'>
		<Card border="primary" style={{margin:'10px',backgroundColor:'lightgreen'}}>
  
    <Card.Body>
      <Card.Title>My Profile</Card.Title>
    </Card.Body>
	<Card.Footer> <Link to='/agentProfile' className='btn '>View Details</Link></Card.Footer>
  </Card>
		</Col>
		<Col className='col-6'>
		<Card border="primary" style={{margin:'10px',backgroundColor:'lightpink'}}>
   
    <Card.Body>
      <Card.Title>New Plans</Card.Title>
	 
    </Card.Body>
	<Card.Footer> <Link to='/agentAllPlans' className='btn '>View Details</Link></Card.Footer>
  </Card>
		</Col>
		</Row>
      </div>
    </div>

  )
}
export default AgentDashboard
