import { Button } from "@mui/material";
import React from "react";

const Ubication = () => {
  return (
    <>
      <div className="bg-fondoUbication h-fit bg-cover pt-48 pb-4 max-sm:pt-20 ">
        <div className="container mx-auto">
          <p className="text-center text-3xl font-bold text-red-800">
            ENCUÉNTRANOS!
          </p>
          <div className="relative flex flex-col items-center gap-4 justify-center my-4 max-sm:gap-2 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.310187060732!2d-75.73138782535615!3d-14.058851686365776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e2bba403044f%3A0x5a0e747096b89b49!2sC.%20Castrovirreyna%20478%2C%20Ica%2011002!5e0!3m2!1ses-419!2spe!4v1697140677308!5m2!1ses-419!2spe"
              width="800"
              height="450"
              loading="lazy"
              className="max-sm:w-[370px] max-sm:h-[225px]"
            ></iframe>
            <a
              href="https://www.google.com/maps?ll=-14.058852,-75.728813&z=16&t=m&hl=es-419&gl=PE&mapclient=embed&q=C.+Castrovirreyna+478+Ica+11002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="contained"
                sx={{ fontWeight: "bold", marginTop: 4, marginBottom: 4 }}
                className="w-64 "
              >
                Llevame
              </Button>
            </a>
            <div className="flex flex-col items-center justify-center gap-2 my-4 max-sm:items-center max-sm:justify-center font-Itim">
              <h3 className="text-3xl font-bold max-sm:text-center max-sm:mb-4">
                SABOR PERUCHO
              </h3>
              <span className="text-xl text-center font-normal max-sm:text-lg max-sm:mx-2 max-sm:mb-2 ">
                Ubicados en el corazón de Ica, SABOR PERUCHO te invita a un
                viaje culinario a Perú sin salir de la ciudad. Nuestra pollería
                es un auténtico rincón de sabor peruano, donde el aroma de pollo
                a la brasa recién salido del horno y los sabores únicos de la
                cocina peruana se unen para ofrecerte una experiencia
                gastronómica inolvidable.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ubication;
