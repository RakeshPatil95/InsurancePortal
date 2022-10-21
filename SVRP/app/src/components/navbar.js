import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button,Col,Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate()
  const signinpage = () => {
    navigate('/signin')
  }
  return (
    <div style={{overflowY:'auto'}}>
    <Navbar bg="#004E8F"  style={styles.navs} variant={"dark"} expand="lg">
    
    
    <Navbar.Brand>
      <img
        src={require(`../Images/logo-color.png`)}
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
          <NavLink to="/" style={styles.myfont}>Home</NavLink>
          <NavLink to="/contactus" style={styles.myfont}>Contact Us</NavLink>
         
          <NavLink to="/aboutus" style={styles.myfont}>About Us</NavLink>
        </Nav>
        <Form className="d-flex" style={{marginRight:'250px'}}>
          <FormControl
            type="search"
            placeholder="Search Your Dream Here"
            className="me-2 rounded-pill"
            aria-label="Search "
            style={{width:'450px'}}
          />
          <Button variant="outline-success rounded-pill" style={{
                width: "100px",
                height: 45,
                backgroundColor: "#FFCB08",
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
          }} >Search</Button>
        </Form>
        <Button variant="outline-success rounded-pill" style={{
                width: "100px",
                height: 45,
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
          }} onClick={signinpage}>SignIn</Button>
      </Navbar.Collapse>
    
    </Navbar>
    </div>
  )
}
export default NavBar;
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
      width:"200px",
        height:"50px",
        margin:'none',
       borderRadius:'10px'

    }
  };