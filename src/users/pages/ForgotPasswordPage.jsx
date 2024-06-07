import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useForm from "../../form/hooks/useForm";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import Form from "../../form/components/Form";
import Input from "../../form/components/Input";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getUserFromLocalStorageByEmail, setTempEmailInLocalStorage } from "../services/localStorageHelpers";

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

const initialForgotPasswordForm = { email: "" };

const forgotPasswordSchema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: { message: "is not valid" },
  },
};

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  const handleForgotPassword = async (formData) => {
    const user = getUserFromLocalStorageByEmail(formData.email);
    if (user) {
      setTempEmailInLocalStorage(formData.email);
      navigate("/reset-password");
    } else {
      alert("Email not found. Please check your email and try again.");
    }
  };

  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialForgotPasswordForm, forgotPasswordSchema, handleForgotPassword);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <PageHeader
          title="Forgot Password"
          subtitle="Enter your email to reset your password"
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
            title="Forgot Password"
            styles={{ maxWidth: "450px", backgroundColor: "background.default" }}
            onSubmit={onSubmit}
            onReset={handleReset}
            validateForm={validateForm}
          >
            <Input
              label="Email"
              name="email"
              type="email"
              error={errors.email}
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
