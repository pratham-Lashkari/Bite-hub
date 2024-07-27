import {
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};

const Register = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ values, handleChange }) => (
          <Form>
            <Field
              as={TextField}
              label="Full Name"
              name="fullName"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <Field
              as={TextField}
              label="Email"
              name="email"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <Field
              as={TextField}
              label="Password"
              name="password"
              type="password"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel id="role-simple-select-label">Role</InputLabel>
              <Field
                as={Select}
                labelId="role-simple-select-label"
                id="role-simple-select"
                name="role"
                label="Role"
                value={values.role}
                onChange={handleChange}
              >
                <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
                <MenuItem value="ROLE_RESTAURANT_OWNER">
                  Restaurant Owner
                </MenuItem>
              </Field>
            </FormControl>
            <Button
              sx={{ mt: 2, padding: "1rem" }}
              fullWidth
              type="submit"
              variant="contained"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        If you already have an account?
        <Button size="small" onClick={() => navigate("/account/login")}>
          Login
        </Button>
      </Typography>
    </div>
  );
};

export default Register;
