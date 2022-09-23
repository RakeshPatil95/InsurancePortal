import Navbar from '../../components/navbar'
import '../../App.css'
const AboutUs = () => {
    return <div className='App'>
        <Navbar />
        <div style={styles.container}>
         <div className="section" >
		<div className="container">
			<div className="content-section">
				<div className="title">
                            <h1 style={styles.myfont1}>About Us</h1>
                            <br></br>
				</div>
				<div className='text-container' style={styles.myfont}>
					<h4>Every day we wake up to the fact that more than 250 million lives are part of our family called SVRP.</h4><br></br>
                        <h4>We are humbled by the magnitude of the responsibility we carry and realise the lives that are associated with us are very valuable indeed.</h4><br></br>
                        <h4>Though this journey started over six decades ago, we are still conscious of the fact that, while insurance may be a business for us, being part of millions of lives every day for the past 65 years has been a process called TRUST.</h4>
					<div className="button">
					</div>
				</div>
				<div className="social">
					<a href=""><i className="fab fa-facebook-f"></i></a>
					<a href=""><i className="fab fa-twitter"></i></a>
					<a href=""><i className="fab fa-instagram"></i></a>
				</div>
			</div>
			<div className="image-section">
			</div>
		</div>
	</div>
        </div>
        </div>
}
const styles = {
    container: {
        top:180,
        maxWidth: '500px',
    minWidth: '300px',
    maxHeight: '700px',
   width: '30%',
    height: '60%',
    margin: '100px auto',
    borderRadius: '25px',
    width: '100%',
    padding: 20,
    overflow: 'auto',
    position: 'relative',
    margin: 'auto',
   borderColor: 'white',
  // borderRadius: 10,
   broderWidth: 1,
   borderStyle: 'solid',
   boxShadow: '1px 1px 20px 5px white',
  background: "rgba(0,0, 0, 0.5)",
    },
    myfont:{
        marginRight:'10px',
        color:"white",
        textDecoration: 'none',
       
    },
    myfont1:{
        marginRight:'10px',
        color:"#FFCB08",
        textDecoration: 'none',
        fontWeight:'bold'
      }
}
export default AboutUs