import { NavLink } from "react-router-dom";
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button } from "react-bootstrap";
const CustomerNavBar = (props) => {
 let CustomerName=props.customerName;

  const signout = () => {
    toast("Thanks for Visiting...!!!", {
      style: {
        backgroundColor: "black",
        color: "white",
      }
    });
  }
  return (
    <Navbar bg="#004E8F"  style={styles.navs} variant={"dark"} expand="lg">
    
    <Navbar.Brand>
      <img
        src={require(`../../Images/logo-color.png`)}
        className="logo"
        style={styles.logo}
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
         
          <NavLink to="#" style={styles.myfont}>Welcome {CustomerName}</NavLink>
        </Nav>
        <Form className="d-flex" style={{marginRight:'350px'}}>
          <FormControl
            type="search"
            placeholder="Search Your Dream Here"
            className="me-2 rounded-pill"
            aria-label="Search "
            style={{width:'350px'}}
          />
          <Button variant="outline-success rounded-pill" style={{
                width: "90px",
                height: 40,
                backgroundColor: "#FFCB08",
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
              }} >Search</Button>
        </Form>
        <NavLink exact to="/" onClick={signout} style={styles.myfont}>Sign Out</NavLink>
      </Navbar.Collapse>
    
  </Navbar>
  )
}
export default CustomerNavBar;
const styles = {
    navs: {
      color: "white",
      fontWeight: "bold",
      fontSize: 22,
      backgroundColor:"#004E8F",
      marginBottom:'5px',
      
    },
    myfont:{
      marginRight:'10px',
      color:"white",
      textDecoration: 'none',
    },
    signindropdown:{
      textDecoration:'none',color:'black',
    },
    logo:{
      width:"100px",
        height:"50px",
        margin:'none',
       borderRadius:'10px'

    }
  };