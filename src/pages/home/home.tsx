import { Combos, info } from "../../helpers";
import { Carrusel } from "../../components/Carrusel";
import { Link, NavLink } from "react-router-dom";

//import { Navbar } from "../../components";

const Home = () => {
  return (
    <>
      
        <section className=" bg-stone-400  py-10 ">
          <div className=" container mx-0">
            <div className="flex items-center justify-center flex-col gap-8 w-[115rem]">
              <Carrusel slides={info} />
            </div>
          </div>
        </section>
      

      <div className="py-14 flex flex-col gap-7 bg-white ">
        <h3 className="text-center font-extrabold text-3xl max-sm:text-3xl p-2">
          Hambre? dinos cual es tu hambre
        </h3>
        <div className="py-8 flex max-sm:flex-col items-center justify-center gap-8 max-sm:gap-10 max-sm:mx-4 ">
          <div className="hover:cursor-pointer hover:rounded-2xl relative group border-8 border-yellow-200 rounded-xl">
            <div className="relative">
              <img
                src="/personal.jpg"
                alt="BG"
                className="w-[24rem] max-sm:w-72 transition-opacity duration-300 h-[18rem] rounded-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-3xl">Ser Proactivos</span>
              <p className="font-medium text-base py-2">
                Teniendo una iniciativa, elaborando un plan de marketing
                individualizado a cada propiedad. Tratamos de adelantarnos a las
                situaciones adversas con el único objetivo de ofrecer un
                asesoramiento de calidad.
              </p>

              <Link to="../Carta" className="py-4">
                <div className="bg-slate-500 border-4 flex items-center justify-center h-10 w-20 py-4 rounded-lg">
                  CARTA
                </div>
              </Link>
            </div>
          </div>
          <div className="hover:cursor-pointer relative group border-yellow-200 border-8 rounded-xl">
            <div className="relative">
              <img
                src="/parados.jpg"
                alt="BG"
                className="rounded-md max-sm:w-72 transition-opacity duration-300 h-72"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-3xl">Pasión</span>
              <p className="font-medium text-base">
                Disfrutamos de nuestro trabajo, contando con expertos en la
                materia, dedicados con nuestra labor intermediaria para lograr
                sacar el mayor rendimiento de nuestras propiedades para
                beneficios de nuestros clientes.
              </p>
              <Link to="../Carta" className="py-4">
                <div className="bg-slate-500 border-4 flex items-center justify-center h-10 w-20 py-4 rounded-lg">
                  CARTA
                </div>
              </Link>
            </div>
          </div>
          <div className="hover:cursor-pointer relative group border-yellow-200 border-8 rounded-xl">
            <div className="relative rounded-xl">
              <img
                src="/familiares.jpg"
                alt="BG"
                className="rounded-md w-96 max-sm:w-80 transition-opacity duration-300 h-72"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-3xl">Profesionalidad</span>
              <p className="font-medium text-sm">
                Siempre te ofreceremos soluciones, lo hacemos desde el
                conocimiento técnico de la materia. Trabajamos con propiedades
                con alto potencial por lo que la exigencia en el servicio debe
                ser máxima. En H.O. CONSTRUCTORES E.I.R.L. cada cliente es
                único; respetamos sus preferencias por encima de todo y nos
                adaptamos a ellas.
              </p>
              <Link to="../Carta" className="py-4">
                <div className="bg-slate-500 border-4 flex items-center justify-center h-10 w-20 py-4 rounded-lg">
                  CARTA
                </div>
              </Link>
            </div>
          </div>
        </div>
        <h2 className="text-center font-bold text-3xl max-sm:text-3xl p-2"
        >NUESTROS MEJORES PRODUCTOS
        </h2>
        <div className="py-8 flex max-sm:flex-col items-center justify-center gap-8 max-sm:gap-10 max-sm:mx-4">
          <div className="hover:cursor-pointer relative group">
            <div className="relative">
              <img
                src="/1 POLLO A LA BRASA + UN CUARTO + GASEOSA.png"
                alt="BG"
                className="rounded-md w-[24rem] max-sm:w-72 transition-opacity duration-300 h-[21rem] border"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-3xl py-7">Pollo a la brasa y su Yapa</span>
              <p className=" flex font-semibold text-xl py-2  items-center justify-center ">
              Llevate tu pollo a la brasa + un cuarto de yapa 
                  + su gaseosa helada y sus acompañantes



              </p>

              <Link to="../Carta" className="py-4">
                <div className="bg-slate-500 border-4 flex items-center justify-center h-10 w-20 py-4 rounded-lg">
                  CARTA
                </div>
              </Link>
            </div>
          </div>
          <div className="hover:cursor-pointer relative group">
            <div className="relative">
              <img
                src="/MEDIO_POLLO_A_LA_BRASA.webp"
                alt="BG"
                className="rounded-md w-[23rem] max-sm:w-[23rem] transition-opacity duration-300 h-[21rem]"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-4xl flex justify-center items-center py-4">Medio Pollo </span>
              <p className="font-medium text-lg flex items-center justify-center py-4">
              Disfruta tu medio pollo caliente con su ensalada sus cremas de casa con sus papas doradas
              </p>
              <Link to="../Carta" className="py-4">
                <div className="bg-slate-500 border-4 flex items-center justify-center h-10 w-20 py-4 rounded-lg">
                  CARTA
                </div>
              </Link>
            </div>
          </div>
          <div className="hover:cursor-pointer relative group">
            <div className="relative">
              <img
                src="/parrilla.jpg"
                alt="BG"
                className="rounded-md w-[23rem] max-sm:w-72 transition-opacity duration-300 h-[21rem]"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-6xl flex justify-center items-center py-4">Parrilla</span>
              <p className="font-medium text-lg py-4">
                Disfruta de una parrilla con esquisiteces de carnes como bife una chuleta 1/4 de pollo con 1 palillo de anticucho
              </p>
              <Link to="../Carta" className="py-4">
                <div className="bg-slate-500 border-4 flex items-center justify-center h-10 w-20 py-4 rounded-lg">
                  CARTA
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
