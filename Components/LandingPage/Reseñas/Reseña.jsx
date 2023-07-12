import * as React from "react";
import s from "./Reseña.module.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function Reseña() {
  const [value, setValue] = React.useState(2);

  return (
    <div className={s.caja5}>
      <div className={s.cajaInterna}>
        <div className={s.reseña}>
          <h1>Reseña</h1>
          <div>
            <p>Opiniones de la gente sobre sus compras</p>
          </div>
        </div>
        <div className={s.carrusel}>
          <div className={s.carrusel1}>
            <div className={s.imagen}>
              <div className={s.cajaImagen}>imagen</div>
            </div>
            <div className={s.caja}>
              <div className={s.avatar}></div>
              <div className={s.calificacion}>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Typography component="legend"></Typography>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </div>
            </div>
            <div className={s.opinion}>
              <div className={s.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                aliquam justo non nisi dapibus, id pellentesque ex ultrices.
                Mauris bibendum purus vel purus tempor cursus. Nulla at semper
                purus, eu tempor quam. Fusce finibus nisi in ligula efficitur,
                et commodo urna fringilla
                <span className={s.ellipsis}>...</span>
              </div>
            </div>
          </div>
          <div className={s.carrusel1}>
            <div className={s.imagen}>
              <div className={s.cajaImagen}>imagen</div>
            </div>
            <div className={s.caja}>
              <div className={s.avatar}></div>
              <div className={s.calificacion}>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Typography component="legend"></Typography>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </div>
            </div>
            <div className={s.opinion}>
              <div className={s.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                aliquam justo non nisi dapibus, id pellentesque ex ultrices.
                Mauris bibendum purus vel purus tempor cursus. Nulla at semper
                purus, eu tempor quam. Fusce finibus nisi in ligula efficitur,
                et commodo urna fringilla
                <span className={s.ellipsis}>...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
