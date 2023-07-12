import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

export default function Login() {
  const { loginWithRedirect, user } = useAuth0();

  return (
    <>
      <Button onClick={() => loginWithRedirect()} variant="outlined" sx={{ borderColor: "#757575", color: "white", borderWidth: 1, backgroundColor: "grey",  borderRadius: "10%", width: "90px", height: "40px" }}>
        Iniciar sesión
      </Button>
    </>
  );
}
