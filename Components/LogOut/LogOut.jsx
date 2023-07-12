import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Typography } from "@mui/material";

export default function LogOut() {
  const { logout } = useAuth0();

  return (
    <>
      <Button onClick={() => logout()} variant="outlined" sx={{ borderColor: "#757575", color: "white", borderWidth: 1, backgroundColor: "grey",  borderRadius: "10%", width: "90px", height: "40px" }}>
        <Typography sx={{ fontSize: "12px" }}>Cerrar sesión</Typography>
      </Button>
    </>
  );
}
