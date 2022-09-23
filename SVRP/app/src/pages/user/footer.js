import { Link } from "react-router-dom"
const Footer=()=>{
    return(
<footer className="text-center text-lg-start bg-dark text-white">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
    {/* Left */}
    {/* <div className="me-2 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div> */}
    {/* Left */}
    {/* Right */}
    <div>
      <a href className="me-4 text-reset">
        <i className="fab fa-facebook-f" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-twitter" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-google" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-instagram" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-linkedin" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-github" />
      </a>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section className>
    <div className="container text-center text-md-start mt-6">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-5 mx-auto mb-2">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-2">
            <i className="fas fa-gem me-3" />SVRP Insurance
          </h6>
          <p>Zindagi ke Saath bhi , Zindagi ke Baad bhi <br />A  Lifetime of Relationship
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 ">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Life Insurance</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Health Insurance</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Car Insurance</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Business Insurance</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fas fa-home me-3" />Sunbeam Hinjewadi, Pune</p>
          <p>
            <i className="fas fa-envelope me-3" />
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  {/* Copyright */}
</footer>
    )
}
export default Footer
{/* Footer */}
