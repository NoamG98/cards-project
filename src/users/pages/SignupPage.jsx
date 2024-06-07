import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useForm from "../../form/hooks/useForm";
import signupSchema from "../models/signupSchema";
import Container from "@mui/material/Container";
import SignupForm from "../components/SignupForm";
import { useUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useUsers from "../hooks/useUsers";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import { saveUserToLocalStorage } from "../services/localStorageHelpers";

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

export default function SignupPage() {
  const { handleSignup } = useUsers();

  const handleUserSignup = (formData) => {
    saveUserToLocalStorage(formData);
    handleSignup(formData);
  };

  const {
    data,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
    handleChangeCheckBox,
  } = useForm(initialSignupForm, signupSchema, handleUserSignup);

  const { user } = useUser();

  if (user) return <Navigate to={ROUTES.ROOT} replace />;

  return (
    <ThemeProvider theme={theme}>
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
        <SignupForm
          onSubmit={onSubmit}
          onReset={handleReset}
          validateForm={validateForm}
          title={"register form"}
          errors={errors}
          data={data}
          onInputChange={handleChange}
          handleChangeCheckBox={handleChangeCheckBox}
          sx={{
            backgroundColor: "background.default",
            maxWidth: "450px",
            padding: 3,
            borderRadius: 1,
            boxShadow: 2,
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
