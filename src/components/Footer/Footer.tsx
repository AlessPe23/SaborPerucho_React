import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-400 relative ">
        <div className="container mx-auto py-4 ">
          <div className="grid grid-cols-5 gap-8 pt-2 max-lg:gap-2">
            <div className="col-span-2 max-sm:col-span-5 max-lg:col-span-5">
              <div className="flex max-sm:flex-col max-sm:items-center max-lg:flex-col">
                <div>
                  <img
                    src="./Logo_sf.png"
                    alt="Logo"
                    className="max-sm:h-[150px] max-lg:mx-auto max-lg:h-[150px]"
                  />
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-white text-sm font-semibold max-sm:text-xs max-lg:text-lg">
                    ¡Bienvenidos a SABOR PERUCHO! Donde cada bocado es un viaje
                    a Perú. Sumérgete en los sabores auténticos de la cocina
                    peruana mientras disfrutas de nuestro delicioso pollo a la
                    brasa y otros platos tradicionales.
                  </p>
                </div>
                <div className="max-sm:w-full max-sm:bg-gray-400 max-sm:h-[0.5px] max-sm:mb-5 max-sm:mt-4"></div>
              </div>
            </div>
            <div className="col-span-1 max-sm:col-span-5 max-lg:col-span-5">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl text-white font-bold">Menu</h2>
                <ul>
                  <li className="text-white hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                    <Link to="/">Inicio</Link>
                  </li>
                  <li className="text-white hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                    <Link to="/about">Sobre Nosotros</Link>
                  </li>
                  <li className="text-white hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                    <Link to="/ubication">Ubicación</Link>
                  </li>
                  <li className="text-white hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                    <Link to="/proyects">Nuestra Carta</Link>
                  </li>
                </ul>
              </div>
              <div className="max-sm:w-full max-sm:bg-gray-400 max-sm:h-[0.5px] max-sm:mb-5 max-sm:mt-4"></div>
            </div>
            <div className="col-span-1 max-sm:col-span-5 max-lg:col-span-5">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl text-white font-bold">Redes Sociales</h2>
                <ul>
                  <li className="text-white hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                    <WhatsAppIcon />{" "}
                    <a
                      href="https://w.app/SaborPerucho"
                      target="_blank"
                    >
                      Whatsapp
                    </a>
                  </li>
                  <div className="col-span-1 max-sm:col-span-5 max-lg:col-span-5">
                    <div className="flex flex-col items-center justify-center">
                      <h2 className="text-xl text-white font-bold">Otros</h2>
                      <ul>
                        <li className="text-white hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                          <LocationOnIcon />{" "}
                          <a href="https://www.google.com/maps?ll=-14.058852,-75.728813&z=16&t=m&hl=es-419&gl=PE&mapclient=embed&q=C.+Castrovirreyna+478+Ica+11002">
                            Calle Castrovirreyna 480 (Frente de Emapica)
                          </a>
                        </li>
                        <li className="text-white hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                          <PhoneIcon />
                          <a href="tel:+51 905 452 633">+51 929 542 858</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </div>
              <div className="max-sm:w-full max-sm:bg-gray-400 max-sm:h-[0.5px] max-sm:mb-5 max-sm:mt-4"></div>
            </div>
          </div>
          <div className="w-full bg-gray-400 h-[0.5px] my-2"></div>
          <div className="container mx-auto flex justify-between items-center text-white max-sm:flex-col">
            <h3>© 2023 SaborPerucho. Todos los derechos reservados.</h3>
            <p>Terminos y condiciones | Politicas de Privacidad</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
