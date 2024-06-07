import { Alert, AlertTitle, Backdrop, Box, Button, Stack } from "@mui/material";
import React, { createContext, useCallback, useContext, useState } from "react";

const AlertContext = createContext();

export default function AlertProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("info");
  const [title, setTitle] = useState("Info");
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const alertActivation = useCallback((color, title, message) => {
    setOpen(true);
    setColor(color);
    setTitle(title);
    setMessage(message);
  }, []);

  return (
    <Box>
      <AlertContext.Provider value={{ alertActivation }}>
        {children}
      </AlertContext.Provider>
      <Backdrop open={open}>
        <Stack sx={{ width: "25%" }} spacing={2}>
          <Alert
            severity={color}
            action={
              <Button color="inherit" size="small" onClick={handleClose}>
                OK
              </Button>
            }
          >
            <AlertTitle>{title}</AlertTitle>
            {message}
          </Alert>
        </Stack>
      </Backdrop>
    </Box>
  );
}

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error("useSnackbar must be used within a Provider");
  return context;
};