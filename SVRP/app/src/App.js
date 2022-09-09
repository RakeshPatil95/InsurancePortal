import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/user/home';
import Signin from './pages/user/signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForgotPassword from './pages/user/forgotPassword';
import Signup from './pages/user/signup';
import CustomerDashBoard from './pages/customer/customerdahsboard';
import CustomerPolicies from './pages/customer/customerpolicies';
import CustomerProfile from './pages/customer/customerprofile';
import AboutUs from './pages/user/aboutus';
import ContactUs from './pages/user/contactus';
import CustomerAllPlans from './pages/customer/customerallplans';
import CustomerPremiumPayments from './pages/customer/customerpremiumpayments';
import CustomerSummary from './pages/customer/customersummary';
import CustomerPolicyDetails from './pages/customer/customerpolicydetails';
import CustomerNewPolicyDetails from './pages/customer/customernewpolicydetails';
import CustomerPayNow from './pages/customer/customerpaynow';
import AdminDashBoard from "./pages/admin/admindahsboard";
import Newapplications from "./pages/admin/newapplications";
import Admincustomers from "./pages/admin/admincustomers";
import Adminagents from "./pages/admin/adminagents";
import AdminProfile from "./pages/admin/adminprofile";
import Adminallplans from "./pages/admin/adminallplans";
import AdminNewApplicationDetails from "./pages/admin/adminNewApplicationDetails"
import Totalbusiness from "./pages/admin/totalbusiness";
import AdminAddPolicy from "./pages/admin/adminAddPolicy";
// import Createprofile from "./pages/user/createprofile";
import AdminCustomersDetails from "./pages/admin/adminCustomersDetails";
import AdminCustomersPolicyDetails from "./pages/admin/adminCustomersPolicyDetails";
import AdminAgentsCustomersDetails from "./pages/admin/adminAgentsCustomersDetails";
import AdminAgentsCustomersPolicyDetails from "./pages/admin/adminAgentsCustomersPolicyDetails";
import AdminAgentsDetails from "./pages/admin/adminAgentsDetails";
import AdminPolicyDetails from "./pages/admin/adminPolicyDetails";
import AgentDashboard from "./pages/agent/agentDashboard";
import AgentNavbar from "./pages/agent/agentNavbar";
import AgentSidebar from "./pages/agent/agentSidebar";
import AgentCustomersDetails from "./pages/agent/agentCustomersDetails";
import Agentcustomers from './pages/agent/agentcustomers';
import AgentCustomersPolicyDetails from './pages/agent/agentCustomersPolicyDetails';
import AgentAllPlans from './pages/agent/agentAllPlans';
import AgentPolicyDetails from './pages/agent/agentPolicyDetails';
import AgentPolicySummery from "./pages/agent/agentPolicySummery";
import AgentProfile from "./pages/agent/agentProfile";
import AgentPremiumPayment from "./pages/agent/agentPremiumPayments";
import AgentPremiumPaynow from "./pages/agent/agentPremiumPaynow"; 
import AgentAddCustomer from './pages/agent/agentAddCustomers';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  
   return(
    <BrowserRouter>
  
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signin' element={<Signin />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/forgotpassword' element={<ForgotPassword />} />
    <Route path='/customerdashboard' element={<CustomerDashBoard />} />
    <Route path='/customerpolicies' element={<CustomerPolicies />} />
    <Route path='/customerprofile' element={<CustomerProfile />} />
    <Route path='/customerallplans' element={<CustomerAllPlans />} />
    <Route path='/customerpremiumpayments' element={<CustomerPremiumPayments />} />
    <Route path='/customerpolicydetails' element={<CustomerPolicyDetails />} />
    <Route path='/customernewpolicydetails' element={<CustomerNewPolicyDetails />} />
    <Route path='/customerpaynow' element={<CustomerPayNow />} />
    <Route path='/customersummary' element={<CustomerSummary />} />
    <Route path='/aboutus' element={<AboutUs />} />
    <Route path='/contactUs' element={<ContactUs />} />

    <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
        <Route path="/newapplications" element={<Newapplications />} />
        <Route path="/admincustomers" element={<Admincustomers />}></Route>
           <Route path="/adminagents" element={<Adminagents />} />
        <Route path="/adminNewApplicationDetails" element={<AdminNewApplicationDetails />} />
        <Route path="/adminprofile" element={<AdminProfile />} />
        <Route path="/adminallplans" element={<Adminallplans />} />
        <Route path="/totalbusiness" element={<Totalbusiness />} />
        <Route path="/adminAddPolicy" element={<AdminAddPolicy />} />
        {/* <Route path="/createprofile" element={<Createprofile />} /> */}
        <Route path="/adminCustomersDetails" element={<AdminCustomersDetails />} />
        <Route path="/adminCustomersPolicyDetails" element={<AdminCustomersPolicyDetails />} />

        <Route path="/adminAgentsCustomersDetails" element={<AdminAgentsCustomersDetails />} />
        <Route path="/adminAgentsCustomersPolicyDetails" element={<AdminAgentsCustomersPolicyDetails />} />
        <Route path="/adminAgentsDetails" element={<AdminAgentsDetails />} />
        <Route path="/adminPolicyDetails" element={<AdminPolicyDetails />} />
        <Route path="/adminAddPolicy" element={<AdminAddPolicy />} />
      

      <Route path="/agentDashboard" element={<AgentDashboard />} />
     <Route path="/agentNavbar" element={<AgentNavbar />} />
        <Route path="/agentSidebar" element={<AgentSidebar />} />
        
        <Route path="/agentCustomersDetails" element={<AgentCustomersDetails />} />
        <Route path="/agentcustomers" element={<Agentcustomers />} />
        <Route path="/agentCustomersPolicyDetails" element={<AgentCustomersPolicyDetails />} />
        <Route path="/agentAllPlans" element={<AgentAllPlans />} />
        <Route path="/agentPolicyDetails" element={<AgentPolicyDetails />} />
        <Route path="/agentPolicySummery" element={<AgentPolicySummery />} />
        <Route path="/agentProfile" element={<AgentProfile />} />

        <Route path="/agentPremiumPayment" element={<AgentPremiumPayment />} />
        <Route path="/agentPremiumPaynow" element={<AgentPremiumPaynow />} />
        <Route path="/agentAddCustomer" element={<AgentAddCustomer />} />
   
      </Routes>
      <ToastContainer position='top-center' autoClose={1000} />
      </BrowserRouter>
   )

}

export default App;
