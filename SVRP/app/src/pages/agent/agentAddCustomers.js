import AgentSideBar from "./agentSidebar";
import AgentNavBar from "./agentNavbar";
import "./Dashboard.css";
import { Col, Form, InputGroup, Row, Container, Button } from "react-bootstrap";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import "../../App.css";

const schema = yup.object().shape({
  firstName: yup.string().required("Please Enter your First name"),
  lastName: yup.string().required("Please Enter your Last name"),
  email: yup
    .string()
    .required("Please Enter email address")
    .matches(
      /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email ID"
    ),
  mobileNumber: yup
    .string()
    .required("Enter mobile Number")
    .matches(
      /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
      "Please enter valid 10 digit number"
    ),
  address1: yup.string().required("Please Enter your Address"),
  address2: yup.string().required("Please Enter your Address"),
  pincode: yup
    .string()
    .required("Please Enter your pincode")
    .matches(
      /^\(?(\d{2})\)?[- ]?(\d{2})[- ]?(\d{2})$/,
      "Please enter valid 6 digit number"
    ),
  village: yup.string().required("Please Enter your village"),
  city: yup.string().required("Please Enter your city"),
  state: yup.string().required("Please Enter your state"),
  adharcard: yup.string().required("Please upload your Adhar card"),
  pan: yup.string().required("Please upload your PAN card"),
});

const AgentAddCustomer = () => {
  return (
    <div className="dashboard d-flex">
      <div>
        <AgentSideBar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <AgentNavBar />
        <div>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              mobileNumber: "",
              address1: "",
              address2: "",
              pincode: "",
              village: "",
              city: "",
              state: "",
              adharcard: "",
              pan: "",
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <div>
                <h1>Add Customer Details:</h1>
                <Container style={styles.container}>
                  <Form
                    noValidate
                    onSubmit={handleSubmit}
                    style={styles.myfont}
                  >
                    <Row className="mb-2">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik01"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="Enter your First Name here"
                          value={values.firstName}
                          onChange={handleChange}
                          isValid={touched.firstName && !errors.firstName}
                          isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.firstName}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik02"
                      >
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          placeholder="Enter your Last Name here"
                          value={values.lastName}
                          onChange={handleChange}
                          isValid={touched.lastName && !errors.lastName}
                          isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.lastName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-2">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik03"
                      >
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="mobileNumber"
                          placeholder="Enter your Number here"
                          value={values.mobileNumber}
                          onChange={handleChange}
                          isValid={touched.mobileNumber && !errors.mobileNumber}
                          isInvalid={!!errors.mobileNumber}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.mobileNumber}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik04"
                      >
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter your Email here"
                          value={values.email}
                          onChange={handleChange}
                          isValid={touched.email && !errors.email}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-2">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik05"
                      >
                        <Form.Label>Address Line 1</Form.Label>
                        <Form.Control
                          className="SignUpFormControls"
                          type="text"
                          name="address1"
                          placeholder="Enter your address here"
                          value={values.address1}
                          onChange={handleChange}
                          isValid={touched.address1 && !errors.address1}
                          isInvalid={!!errors.address1}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.address1}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik06"
                      >
                        <Form.Label>Address Line 2</Form.Label>
                        <Form.Control
                          type="text"
                          name="address2"
                          placeholder="Confirm your address here"
                          value={values.address2}
                          onChange={handleChange}
                          isValid={touched.address2 && !errors.address2}
                          isInvalid={!!errors.address2}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.address2}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik07"
                      >
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control
                          type="text"
                          name="pincode"
                          placeholder="Enter your Pincode here"
                          value={values.pincode}
                          onChange={handleChange}
                          isValid={touched.pincode && !errors.pincode}
                          isInvalid={!!errors.pincode}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.pincode}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik07"
                      >
                        <Form.Label>Village</Form.Label>
                        <Form.Control
                          type="text"
                          name="village"
                          placeholder="Enter your Village here"
                          value={values.village}
                          onChange={handleChange}
                          isValid={touched.village && !errors.village}
                          isInvalid={!!errors.village}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.village}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik07"
                      >
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          placeholder="Enter your City here"
                          value={values.city}
                          onChange={handleChange}
                          isValid={touched.city && !errors.city}
                          isInvalid={!!errors.city}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.city}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik07"
                      >
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          type="text"
                          name="state"
                          placeholder="Enter your City here"
                          value={values.state}
                          onChange={handleChange}
                          isValid={touched.state && !errors.state}
                          isInvalid={!!errors.state}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.state}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik07"
                      >
                        <Form.Label>Adhar Card</Form.Label>
                        <Form.Control
                          type="file"
                          name="adharcard"
                          value={values.adharcard}
                          onChange={handleChange}
                          isValid={touched.adharcard && !errors.adharcard}
                          isInvalid={!!errors.adharcard}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.adharcard}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="12"
                        className="mb-2"
                        controlId="validationFormik07"
                      >
                        <Form.Label>PAN</Form.Label>
                        <Form.Control
                          type="file"
                          name="pan"
                          value={values.pan}
                          onChange={handleChange}
                          isValid={touched.pan && !errors.pan}
                          isInvalid={!!errors.pan}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.pan}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        className="mb-2"
                        controlId="validationFormik08"
                      >
                        <Button
                          type="submit"
                          variant="outline-secondary"
                          style={styles.signinButton}
                        >
                          Add Customer
                        </Button>
                      </Form.Group>
                    </Row>
                  </Form>
                </Container>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default AgentAddCustomer;
const styles = {
  container: {
    width: 600,
    height: "auto",
    padding: 20,
    position: "relative",
    top: 100,
    left: "auto",
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "#004E8F",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px white",
  },
  signinButton: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "#FFCB08",
    color: "black",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
    fontWeight: "bold",
  },
  myfont: {
    marginRight: "10px",
    color: "#004E8F",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
