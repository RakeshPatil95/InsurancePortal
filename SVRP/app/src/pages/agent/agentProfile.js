import AgentSideBar from './agentSidebar'
import AgentNavBar from './agentNavbar';
import "./Dashboard.css";
const AgentProfile=()=>{
    return(
        <div className="dashboard d-flex">
    	<div>
      	<AgentSideBar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"auto"}}>
        <AgentNavBar/>
      <div className="container rounded bg-white  mb-5">
  <div className="row">
    <div className="col-md-3 border-right">
      <div className="d-flex flex-column align-items-center text-center p-2 py-5"><img className="rounded-circle mt-5" width="325px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
    </div>
    <div className="col-md-5 border-right">
      <div className="p-2 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-right">Profile Setting</h4>
        </div>
        <div className="row mt-2">
          <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" defaultValue /></div>
          <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" defaultValue placeholder="surname" /></div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" defaultValue /></div>
          <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder="enter email id" defaultValue /></div>
          <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1" defaultValue /></div>
          <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" placeholder="enter address line 2" defaultValue /></div>
          <div className="col-md-12"><label className="labels">Pincode</label><input type="text" className="form-control" placeholder="enter address line 2" defaultValue /></div>
          <div className="col-md-12"><label className="labels">Village</label><input type="text" className="form-control" placeholder="education" defaultValue /></div>
          
        </div>
        <div className="row mt-3">
          <div className="col-md-6"><label className="labels">City</label><input type="text" className="form-control" placeholder="country" defaultValue /></div>
          <div className="col-md-6"><label className="labels">State</label><input type="text" className="form-control" defaultValue placeholder="state" /></div>
        </div>
        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" style={{width:'400px',borderRadius:'15px'}}>Save Profile</button></div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center experience"><h4>Documents</h4></div><br />
        <div className="col-md-12"><label className="labels">Aadhar</label><input type="file" className="form-control"  /></div> <br />
        <div className="col-md-12"><label className="labels">Pan</label><input type="file" className="form-control"  /></div>
      </div>
    </div>
  </div>
</div>


        </div>
        </div>

    )
}
export default AgentProfile