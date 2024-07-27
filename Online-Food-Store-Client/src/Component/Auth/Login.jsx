import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
const initalValues = {
  eamil: "",
  password: "",
};
const Login = () => {
  const handleSubmit = () => {};
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>
      <Formik onSubmit={handleSubmit} initalValues={initalValues}>
        <Form>
          <Field
            as={TextField}
            label="email"
            name="email"
            fullWidth
            variant="outlined"
            margin="normal"
          ></Field>
          <Field
            margin="normal"
            as={TextField}
            label="password"
            name="password"
            fullWidth
            variant="outlined"
          ></Field>
          <Button
            sx={{ mt: 2, padding: "1rem" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Don't have an account?
        <Button size="small" onClick={() => navigate("/account/register")}>
          register
        </Button>
      </Typography>
    </div>
  );
};

export default Login;
