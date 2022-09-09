import { Col,Form,Row,Container,Button } from "react-bootstrap";
import { Formik } from "formik";
import Navbar from "../../components/navbar";
import * as yup from "yup";
import '../../App.css'
const schema = yup.object().shape({
  name: yup.string().required("Please Enter your name"),
  email: yup
    .string()
    .required("Please Enter email address")
    .matches(
      /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email ID"
    ),
  subject: yup.string().required("Please Enter Subject"),
  massage: yup.string().required("Please Enter your massage here"),
});

function ContactUs() {
  return (
    <div className="App">
      <Navbar />
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
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
                      <Container style={styles.container}>
              <Form noValidate onSubmit={handleSubmit} style={styles.myfont}>
                <Row className="mb-2">
                  <Form.Group as={Col} md="6" controlId="validationFormik01">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your Name here"
                      value={values.name}
                      onChange={handleChange}
                      isValid={touched.name && !errors.name}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback className="FeedBack" type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationFormik02">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                        name="email"
                      placeholder="Enter your Email here"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback className="FeedBack" type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-2">
                  <Form.Group as={Col} md="12" controlId="validationFormik03">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                        name="subject"
                      placeholder="Enter your Subject here"
                      value={values.subject}
                      onChange={handleChange}
                      isValid={touched.subject && !errors.subject}
                      isInvalid={!!errors.subject}
                    />
                    <Form.Control.Feedback className="FeedBack" type="invalid">
                      {errors.subject}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-2">
                  <Form.Group as={Col} md="12" controlId="validationFormik05">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      className="SignUpFormControls"
                      type="text"
                        name="massage"
                      placeholder="Enter your Massage here"
                      value={values.message}
                      onChange={handleChange}
                      isValid={touched.message && !errors.message}
                      isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback className="FeedBack" type="invalid">
                      {errors.message}
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
                      Submit
                    </Button>
                    <div></div>
                  </Form.Group>
                </Row>
              </Form>
            </Container>
          </div>
        )}
      </Formik>
    </div>
  );
}
const styles = {
  container: {
    width: 600,
    height: "auto",
    padding: 20,
    position: "relative",
    top: 100,
    left: -400,
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
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
export default ContactUs;
