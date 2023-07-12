import React from "react";
import s from "./AboutUs.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//Aqui se mostraran los integrantes del equipo 10

export default function AboutUs() {
  return (
    <div className={s.fondo}>
      <div className={s.cajaInterna}>
        <div className={s.titulo}>
          <h1>Nosotros</h1>
        </div>
        <div className={s.grupo}>
          {/* ############  FELIPE ############## */}
          <div className={s.cajaNosotros}>
            <div className={s.imagen}></div>
            <h1>Felipe Lopez</h1>
            <p>Full Stack</p>
            <div className={s.iconos}>
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
            <div className={s.cajaIconos}>
              <a href="https://github.com/theinventor1">
                <div className={s.iconos1}>
                  <GitHubIcon></GitHubIcon>
                </div>
              </a>
              <a href="">
                <div className={s.iconos2}>
                  <LinkedInIcon></LinkedInIcon>
                </div>
              </a>
            </div>
          </div>
          {/* ############  MAXIMILIANO ############## */}
          <div className={s.cajaNosotros}>
            <div className={s.imagen2}></div>
            <h1>Maximiliano Fonseca</h1>
            <p>Full Stack</p>
            <div className={s.iconos}>
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
            <div className={s.cajaIconos}>
              <a href="https://github.com/Maxi-95">
                <div className={s.iconos1}>
                  <GitHubIcon></GitHubIcon>
                </div>
              </a>
              <a href="">
                <div className={s.iconos2}>
                  <LinkedInIcon></LinkedInIcon>
                </div>
              </a>
            </div>
          </div>
          {/* ############  CLAUDIO ############## */}
          <div className={s.cajaNosotros}>
            <div className={s.imagen3}></div>
            <h1>Claudio Bethouart</h1>
            <p>Full Stack</p>
            <div className={s.iconos}>
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
            <div className={s.cajaIconos}>
              <a href="https://github.com/Taio45678">
                <div className={s.iconos1}>
                  <GitHubIcon></GitHubIcon>
                </div>
              </a>
              <a href="">
                <div className={s.iconos2}>
                  <LinkedInIcon></LinkedInIcon>
                </div>
              </a>
            </div>
          </div>
          {/* ############  CAMILO ############## */}
          <div className={s.cajaNosotros}>
            <div className={s.imagen4}></div>
            <h1>Camilo Parada Ruis</h1>
            <p>Full Stack</p>
            <div className={s.iconos}>
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
            <div className={s.cajaIconos}>
              <a href="https://github.com/caparada1366">
                <div className={s.iconos1}>
                  <GitHubIcon></GitHubIcon>
                </div>
              </a>
              <a href="">
                <div className={s.iconos2}>
                  <LinkedInIcon></LinkedInIcon>
                </div>
              </a>
            </div>
          </div>
          {/* ############  MARCOS ############## */}
          <div className={s.cajaNosotros1}>
            <div className={s.imagen5}></div>
            <h1>Marcos Cornejo</h1>
            <p>Full Stack</p>
            <div className={s.iconos}>
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
            <div className={s.cajaIconos}>
              <a href="https://github.com/MEC-97">
                <div className={s.iconos1}>
                  <GitHubIcon></GitHubIcon>
                </div>
              </a>
              <a href="">
                <div className={s.iconos2}>
                  <LinkedInIcon></LinkedInIcon>
                </div>
              </a>
            </div>
          </div>
          {/* ############  DAVINSON ############## */}
          <div className={s.cajaNosotros2}>
            <div className={s.imagen6}></div>
            <h1>Davinson Gomez</h1>
            <p>Full Stack</p>
            <div className={s.iconos}>
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
            <div className={s.cajaIconos}>
              <a href="https://github.com/Akadus23">
                <div className={s.iconos1}>
                  <GitHubIcon></GitHubIcon>
                </div>
              </a>
              <a href="">
                <div className={s.iconos2}>
                  <LinkedInIcon></LinkedInIcon>
                </div>
              </a>
            </div>
          </div>
          {/* ############  GASTON ############## */}
          <div className={s.cajaNosotros3}>
            <div className={s.imagen7}></div>
            <h1>Gaston Vilte</h1>
            <p>Full Stack</p>
            <div className={s.iconos}>
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
            <div className={s.cajaIconos}>
              <a href="https://github.com/dalegaz404">
                <div className={s.iconos1}>
                  <GitHubIcon></GitHubIcon>
                </div>
              </a>
              <a href="">
                <div className={s.iconos2}>
                  <LinkedInIcon></LinkedInIcon>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
