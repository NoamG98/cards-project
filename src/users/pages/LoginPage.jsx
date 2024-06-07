import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useForm from "../../form/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/loginSchema";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import Form from "../../form/components/Form";
import ROUTES from "../../routes/routesModel";
import Input from "../../form/components/Input";
import { useUser } from "../providers/UserProvider";
import { Navigate, Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import useUsers from "../hooks/useUsers";

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

export default function LoginPage() {
  const { handleLogin } = useUsers();

  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialLoginForm, loginSchema, handleLogin);

  const { user } = useUser();

  if (user) return <Navigate to={ROUTES.ROOT} replace />;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <PageHeader
          title="Welcome to Login page"
          subtitle="Here you can log in"
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
            title="Login"
            styles={{ maxWidth: "450px", backgroundColor: "background.default" }}
            to={ROUTES.ROOT}
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
            <Input
              label="Password"
              name="password"
              type="password"
              error={errors.password}
              onChange={handleChange}
              data={data}
              sx={{ mb: 2 }}
            />
            <Typography
              variant="body2"
              sx={{ color: "primary.main", mb: 2, textAlign: "right" }}
            >
              <Link to="/forgot-password" style={{ color: "inherit" }}>
                Forgot Password?
              </Link>
            </Typography>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Button
                variant="outlined"
                component={Link}
                to={ROUTES.SIGNUP}
                startIcon={<AccountBoxIcon />}
                sx={{
                  width: "100%",
                  borderColor: "primary.main",
                  color: "primary.main",
                  '&:hover': {
                    borderColor: "primary.dark",
                    backgroundColor: "primary.light",
                  },
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Form>
        </Container>
      </Container>
    </ThemeProvider>
  );
}
