import React, { useEffect, useRef } from "react";
import useForm from "../../form/hooks/useForm";
import Container from "@mui/material/Container";
import useUsers from "../hooks/useUsers";
import editSchema from "../models/editSchema";
import EditForm from "../components/EditForm";
import { getUser } from "../services/localStorageService";
import initialEditForm from "../helpers/initialForms/initialEditForm";
import userToModel from "../helpers/initialForms/userToModel";
import ROUTES from "../../routes/routesModel";
import { useAlert } from "../../providers/AlertProvider";
import { useNavigate } from 'react-router-dom';

export default function EditUserPage() {
  const { handleEdit, handleGetUser } = useUsers();
  const userRef = useRef(getUser());
  const navigate = useNavigate();

  const { data, setData, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialEditForm, editSchema, (newUser) => {
      handleEdit(userRef.current, newUser);
    });

  const { alertActivation } = useAlert();

  useEffect(() => {
    const user = userRef.current;
    if (user) {
      handleGetUser(user._id).then((data) => {
        const modelUser = userToModel(data);
        setData(modelUser);
      });
    } else {
      navigate(ROUTES.ROOT);
    }
  }, [handleGetUser, setData, navigate]);

  const confirmEdit = () => {
    onSubmit(onSubmit);
  };

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EditForm
        onSubmit={() =>
          alertActivation(
            "info",
            "Edit Confirmation",
            "Are you sure you want to save changes?",
            confirmEdit
          )}
        onReset={handleReset}
        validateForm={validateForm}
        title={"Edit Personal Details"}
        errors={errors}
        data={data}
        onInputChange={handleChange}
      />
    </Container>
  );
}