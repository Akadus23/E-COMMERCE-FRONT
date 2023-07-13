import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, Avatar } from "@mui/material";
import Compras from "./Compras/Compras";
import MisDatos from "./MisDatos/MisDatos";
import { useAuth0 } from "@auth0/auth0-react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {isAuthenticated ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            mt: 10,
            mb: 10,
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "80%",
            marginLeft: "5%",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              flex: "0 0 auto",
              width: "200px",
            }}
          >
            <Box className="nombreUsuario" sx={{ mb: 3 }} textAlign="center">
              <Avatar
                src="https://static.vecteezy.com/system/resources/previews/007/409/979/non_2x/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg"
                alt=""
                className="avatar"
                sx={{ width: "90%", height: "90%", mt: 1, ml: 1 }}
              />
              <Typography variant="h4" sx={{ mt: 2 }}>
                Nombre
              </Typography>
              <Typography variant="h4">Apellido</Typography>
              <Typography variant="h5" sx={{ mt: 3 }}>
                Rol: Usuario
              </Typography>
            </Box>
            <Tab label="Mis datos" {...a11yProps(1)} />
            <Tab label="Mis compras" {...a11yProps(2)} />
          </Tabs>
          <Box sx={{ flex: 1, borderLeft: 1, borderColor: "divider" }}>
            <Box>
              <TabPanel value={value} index={1}>
                <MisDatos />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Compras />
              </TabPanel>
            </Box>
          </Box>
        </Box>
      ) : (
        loginWithRedirect()
      )}
    </>
  );
}
