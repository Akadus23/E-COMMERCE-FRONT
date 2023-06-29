import {
  CardContent,
  CardHeader,
  Link,
  Typography,
  Avatar,
  Grid,
  Card,
  CardActions,
} from "@mui/material";
import { integrantes } from "../../Helpers/Helpers";
import { createTheme } from "@mui/material/styles";
import "../AboutUs/AboutUs.css";

const AboutUs = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  return (
    <Grid
      container
      spacing={5}
      sx={{
        justifyContent: "start",
        display: "space-between",
        alignItems: "center",
        mt: 8,
        margin: 0,
        padding: "100px",
        width: {
          mobile: "99.5%",
          tablet: "99.5%",
          laptop: "99.5%",
        },
        alignSelf: "center",
        mb: 8,
      }}
    >
      {integrantes.map((integrante) => (
        <Grid
          item
          mobile={12}
          tablet={6}
          laptop={6}
          desktop={6}
          key={integrante.id}
        >
          <Card
            sx={{
              maxWidth: "100%",
              minWidth: "200px",
              padding: 2,
              height: "auto",
              backgroundColor: "#40e0d0",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  src={integrante.imagen}
                  sx={{
                    width: 160,
                    height: 160,
                    bgcolor: theme.palette.primary.light,
                  }}
                  aria-label="recipe"
                >
                  {integrante.nombre
                    .split(" ")
                    .map((ele) => ele[0])
                    .join("")}
                </Avatar>
              }
              title={
                <div>
                  <Typography
                    sx={{
                      display: "flex",
                      width: "80px",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                    variant="h6"
                  >
                    {integrante.nombre}
                  </Typography>

                  <Typography variant="h7">{integrante.area}</Typography>
                </div>
              }
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                
              }}
            >
              <Typography sx={{ width: 200, h: 200, fontSize: 14 }}>
                {integrante.description}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Link
                href={integrante.linkedin}
                sx={{
                  fontSize: 12,
                  textAlign: "start",
                  fontFamily: "Arial",
                  color: "black",
                }}
              >
                <Typography>LINKEDIN</Typography>
              </Link>
              <Link
                href={integrante.github}
                sx={{ fontSize: 12, textAlign: "start" }}
              >
                <Typography>GITHUB</Typography>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AboutUs;
