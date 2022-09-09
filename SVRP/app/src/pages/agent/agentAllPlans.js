import AgentSideBar from './agentSidebar'
import AgentNavBar from './agentNavbar';
import "./Dashboard.css";
import { Row, Col, Card, Button } from 'react-bootstrap';
import Footer from '../user/footer';
import { Link } from 'react-router-dom';
const AgentAllPlans=()=>{
    return(
        <div className="dashboard d-flex">
    	<div>
      	<AgentSideBar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"auto"}}>
        <AgentNavBar/>
       
       <Row xs={1} md={2} className="g-3">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card className='col-12'>
        <Card.Img variant="top"  src="https://events.ibx.com/wp-content/uploads/2017/03/cost-of-health-coverage1.jpg" />
        <Card.Body>
          <Card.Title ><h3>Jeevan Labh</h3></Card.Title>
          <Card.Text>
           <h5> This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.</h5>
          </Card.Text>
          <div className='d-flex justify-content-center'>
          <Link to='/agentPolicyDetails' className='btn btn-success ' style={{width:'350px',borderRadius:'15px'}}  >View Policy</Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
<Footer/>
       </div>
       </div>
    )
}
export default AgentAllPlans;