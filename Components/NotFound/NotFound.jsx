import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Image = styled("img")({
    maxWidth: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

const NotFound = () => {

      return (
        <Box height="70vh" display="flex" justifyContent="center" alignItems="center">
          <Image src="https://www.lucushost.com/blog/wp-content/uploads/2018/05/error-404-que-es-como-solucionarlo.png" alt="Página no encontrada" />
        </Box>
      );
};

export default NotFound;


