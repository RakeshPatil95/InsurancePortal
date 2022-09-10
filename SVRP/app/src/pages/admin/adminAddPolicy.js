import CustomerSideBar from "./adminsidebar";
import CustomerNavBar from "./adminnavbar";
import "./Dashboard.css";
import { Col, Form, InputGroup, Row, Container, Button } from "react-bootstrap";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import "../../App.css";

const schema = yup.object().shape({
  policyName: yup.string().required("Please enter Policy Name"),
  startDate: yup.string().required("Please enter Start Date"),
  endDate: yup.string().required("Please enter End Date"),
  primium: yup.string().required("Please enter Primium"),
  maturity: yup.string().required("Please enter Maturity"),
  primeDate: yup.string().required("Please enter prime date"),
  policyImage:yup.string().required("Please give a Policy Image")
});

const AdminAddPolicy = () => {
  return (
    <div className="dashboard d-flex">
      <div>
        <CustomerSideBar />
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
        <CustomerNavBar />
        <div>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              policyName: "",
              startDate: "",
              endDate: "",
              primium: "",
              maturity: "",
              primeDate: "",
              policyImage:""
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
              <div className="dashboard d-flex">
                              <Container style={styles.container}>
                              <h1 style={{marginBottom:'40px',marginLeft:'10px',textAlign:'center'}}><b>New Policy</b></h1>
                  <Form
                    noValidate
                    onSubmit={(values)=>{
                      
                    }
                    }
                    style={styles.myfont}
                  >
                    <Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik07"
                      >
                        <Form.Label>Policy Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="policyName"
                          placeholder="Enter Policy Name"
                          value={values.policyName}
                          onChange={handleChange}
                          isValid={touched.policyName && !errors.policyName}
                          isInvalid={!!errors.policyName}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.policyName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik07"
                      >
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="startDate"
                          value={values.startDate}
                          onChange={handleChange}
                          isValid={touched.startDate && !errors.startDate}
                          isInvalid={!!errors.startDate}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.startDate}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik07"
                      >
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="endDate"
                          value={values.endDate}
                          onChange={handleChange}
                          isValid={touched.endDate && !errors.endDate}
                          isInvalid={!!errors.endDate}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.endDate}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik07"
                      >
                        <Form.Label>Primium</Form.Label>
                        <Form.Control
                          type="text"
                          name="primium"
                          placeholder="Enter Primium in rupees"
                          value={values.primium}
                          onChange={handleChange}
                          isValid={touched.primium && !errors.primium}
                          isInvalid={!!errors.primium}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.primium}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik07"
                      >
                        <Form.Label>Maturity</Form.Label>
                        <Form.Control
                          type="text"
                          name="maturity"
                          placeholder="Enter Maturity in rupees"
                          value={values.maturity}
                          onChange={handleChange}
                          isValid={touched.maturity && !errors.maturity}
                          isInvalid={!!errors.maturity}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.maturity}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik07"
                      >
                        <Form.Label>Prime Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="primeDate"
                          value={values.primeDate}
                          onChange={handleChange}
                          isValid={touched.primeDate && !errors.primeDate}
                          isInvalid={!!errors.primeDate}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.primeDate}
                        </Form.Control.Feedback>
                      </Form.Group>
                                      </Row>
                                      <Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik07"
                      >
                        <Form.Label>Prime Date</Form.Label>
                        <Form.Control
                          type="file"
                          name="policyImage"
                          value={values.primeDate}
                          onChange={handleChange}
                          isValid={!errors.policyImage}
                          isInvalid={!!errors.policyImage}
                        />
                        <Form.Control.Feedback
                          className="FeedBack"
                          type="invalid"
                        >
                          {errors.policyImage}
                        </Form.Control.Feedback>
                      </Form.Group>
                                      </Row>
                                      <Row>
              <Form.Group as={Col} md="12" className="mb-2" controlId="validationFormik08">
              <Button
                      type="submit"
                      
                      variant="outline-secondary"
                style={styles.signinButton}
              >
                Save Policy
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
export default AdminAddPolicy;
const styles = {
  container: {
    width: 600,
    height: "auto",
    padding: 20,
    position: "relative",
    top: 100,
    left: 'auto',
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
