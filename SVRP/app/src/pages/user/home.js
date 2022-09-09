import NavBar from "../../components/navbar"
import {Carousel} from 'react-bootstrap';
import './user.css'
import '../../App.css'
import  image  from './image.jpg';
const Home=()=>{
 
 
  
    return (
     
         
      <div  className="App"> 
        <NavBar/>
     <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 sliderimage"
      src="https://licindia.in/Slider_Images/1-PAN-Card"  
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 sliderimage"
      src="https://licindia.in/Slider_Images/1-PAN-Card"
     
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 sliderimage"
      src="https://licindia.in/Slider_Images/LIC-Bima-Jyoti-Web-Banner_2042-x-610-pix_eng"
      
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 sliderimage"
      src="https://licindia.in/Slider_Images/1-Dhan-sanchay"
      
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>    

        
    )
}
export default Home
