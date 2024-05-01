import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Button,
} from "react-bootstrap";

// Schema di validazione con Yup
const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => (
  <Container className="vh-100 d-flex justify-content-center align-items-center">
    <Row>
      <Col md={6} className="mx-auto">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="mb-4">Login</h2>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Control
                    type="text"
                    name="username"
                    placeholder="Username"
                  />
                  <BootstrapForm.Text className="text-danger">
                    <ErrorMessage name="username" />
                  </BootstrapForm.Text>
                </BootstrapForm.Group>

                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <BootstrapForm.Text className="text-danger">
                    <ErrorMessage name="password" />
                  </BootstrapForm.Text>
                </BootstrapForm.Group>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-100"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Col>
    </Row>
  </Container>
);

export default LoginPage;
