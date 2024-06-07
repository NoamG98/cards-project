import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useForm from "../../form/hooks/useForm";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import Form from "../../form/components/Form";
import Input from "../../form/components/Input";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { updatePasswordInLocalStorage, getTempEmailFromLocalStorage, removeTempEmailFromLocalStorage } from "../services/localStorageHelpers";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32", // Amazon rainforest green
    },
    secondary: {
      main: "#ffcc80", // Complementary color
    },
    background: {
      default: "#e8f5e9", // Light green background
    },
  },
});

const initialResetPasswordForm = { password: "", confirmPassword: "" };

const resetPasswordSchema = {
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: { minimum: 6, message: "must be at least 6 characters" },
  },
  confirmPassword: {
    presence: { allowEmpty: false, message: "is required" },
    equality: { attribute: "password", message: "does not match" },
  },
};

export default function ResetPasswordPage() {
  const navigate = useNavigate();

  const handleResetPassword = async (formData) => {
    const email = getTempEmailFromLocalStorage();
    if (email) {
      updatePasswordInLocalStorage(email, formData.password);
      removeTempEmailFromLocalStorage();
      alert("Password has been reset. You can now log in with your new password.");
      navigate("/login");
    } else {
      alert("No email found for resetting the password.");
    }
  };

  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialResetPasswordForm, resetPasswordSchema, handleResetPassword);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <PageHeader
          title="Reset Password"
          subtitle="Enter your new password"
          sx={{ color: "primary.main" }}
        />
        <Container
          sx={{
            paddingTop: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "background.default",
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Form
            title="Reset Password"
            styles={{ maxWidth: "450px", backgroundColor: "background.default" }}
            onSubmit={onSubmit}
            onReset={handleReset}
            validateForm={validateForm}
          >
            <Input
              label="New Password"
              name="password"
              type="password"
              error={errors.password}
              onChange={handleChange}
              data={data}
              sx={{ mb: 2 }}
            />
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              error={errors.confirmPassword}
              onChange={handleChange}
              data={data}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: "100%" }}
            >
              Reset Password
            </Button>
          </Form>
        </Container>
      </Container>
    </ThemeProvider>
  );
}
