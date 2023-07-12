import React, { useState } from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Grid } from "@mui/material";
//import s from './'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://img.global.news.samsung.com/ar/wp-content/uploads/2022/10/BANNER-Gen%C3%A9rico_1280x490px.jpg",
  },
  {
    imgPath:
      "https://electrhogar.com.ar/wp-content/uploads/2023/04/Banner-Calefaccion-1536x449.jpg",
  },
  {
    imgPath:
      "https://bosque.vteximg.com.br/arquivos/ids/170617/banner-garantia-ext.jpg?v=638157022758400000",
  },
  {
    imgPath:
      "https://www.shutterstock.com/image-vector/promo-banner-healthy-lifestyle-natural-260nw-1996820612.jpg",
  },
];

export default function Carrusel() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <div>
      <Grid container justifyContent="center">
        <Box
          sx={{
            maxWidth: "62%",
            maxHeight: "80%",
            flexGrow: 1,
            position: "absolute",
          }}
        >
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              height: "80%",
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography>{images[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            interval={5000}
          >
            {images.map((step, index) => (
              <div key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      position: "relative",
                      height: "%",
                      display: "flex",
                      maxHeight: 400,
                      overflow: "hidden",
                      width: "100%",
                      objectFit: "cover",
                      mt: "4%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Siguiente
                {<KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {<KeyboardArrowLeft />}
                Anterior
              </Button>
            }
          />
        </Box>
      </Grid>
    </div>
  );
}
