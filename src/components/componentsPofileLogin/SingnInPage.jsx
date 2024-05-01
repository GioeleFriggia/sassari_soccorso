import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const RegistrationBox = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const StyledField = styled(Field)`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
`;

// Schema di validazione con Yup
const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const SignInPage = () => (
  <Container>
    <RegistrationBox>
      <h2>Sign Up</h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
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
            <StyledField type="text" name="username" placeholder="Username" />
            <ErrorMessage name="username" component={ErrorText} />

            <StyledField type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component={ErrorText} />

            <StyledField
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component={ErrorText} />

            <StyledField
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <ErrorMessage name="confirmPassword" component={ErrorText} />

            <Button type="submit" disabled={isSubmitting}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </RegistrationBox>
  </Container>
);

export default SignInPage;
