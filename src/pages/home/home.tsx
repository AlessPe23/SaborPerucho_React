import { Combos, info, info2 } from "../../helpers";
import { Carrusel } from "../../components/Carrusel";
import { Link, NavLink } from "react-router-dom";

//import { Navbar } from "../../components";

const Home = () => {
  return (
    <>
      <section className=" bg-negro px-0 ">
        <div className=" container mx-0">
          <div className="flex items-center justify-center flex-col h-[100%] gap-8 w-[119rem]">
            <Carrusel slides={info2} />
          </div>
        </div>
      </section>
      <div className="  ">
      

      <div className="bg-white  py-0 relative flex-col gap-3 h-[50rem]  ">
      <h3 className="text-black items-center flex justify-center text-left font-extrabold text-5xl max-sm:text-3xl px-[7rem] py-[7rem]">
        Hambre? dinos cual es tu hambre
      </h3>
        <div className=" h-[25rem] bg-opacity-75 w-[100%] ">
          <div className=" flex max-sm:flex-col items-center justify-center gap-12 max-sm:gap-10 max-sm:mx-4 ">
            <div className="hover:cursor-pointer hover:rounded-xl relative group ">
              <div className="relative rounded-lg border-8 border-gray-800">
                <img
                  src="/personal.jpg"
                  alt="BG"
                  className="w-[24rem] max-sm:w-72 transition-opacity duration-300 h-[20rem] rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
                <span className="font-bold text-3xl">Combo individual</span>
                <p className="font-medium text-base py-2">
                  Ofrecemos platillos indicados solo para ti, para chuparte los
                  dedos y apra darte un gustito lo puedes hacer en nuestra
                  tienda como para llevar
                </p>

                <Link to="../Carta" className="py-4">
                  <div className="bg-slate-500 border-4 flex items-center justify-center h-10 w-20 py-4 rounded-lg">
                    CARTA
                  </div>
                </Link>
              </div>
            </div>
            <div className="hover:cursor-pointer hover:rounded-xl relative group ">
              <div className="relative rounded-lg border-8 border-gray-800">
                <img
                  src="/parados.jpg"
                  alt="BG"
                  className="rounded-md max-sm:w-72 transition-opacity duration-300 h-[20rem]"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
                <span className="font-bold text-3xl">Combo dual</span>
                <p className="font-medium text-base">
                  Disfruta con una amig@ o tu pareja uno de nuestros platos con
                  los cuales podran disfrutar de nuestro esquisito sabor y de
                  los productos mas selectos de nuestra carta
                </p>
                <Link to="../Carta" className="py-4">
                  <div className="bg-slate-500 border-4 flex items-center justify-center h-10 w-20 py-4 rounded-lg">
                    CARTA
                  </div>
                </Link>
              </div>
            </div>
            <div className="hover:cursor-pointer hover:rounded-xl relative group">
              <div className="relative rounded-lg border-8 border-gray-800">
                <img
                  src="/familiares.jpg"
                  alt="BG"
                  className="rounded-md w-96 max-sm:w-80 transition-opacity duration-300 h-[20rem]"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
                <span className="font-bold text-3xl">Familiar</span>
                <p className="font-medium text-sm">
                  Contamos con platillos para ti y toda la familia no importa
                  cuantos sean pero todos disfrutaran tanto como en familia como
                  con los amigos esten donde esten o en nuestras instalaciones
                  nada como un buen pollo a la brasa o platos de nuestra carta
                </p>
                <Link to="../Carta" className="py-4">
                  <div className="bg-slate-500 border-4 flex items-center justify-center h-10 w-20 py-4 rounded-lg">
                    CARTA
                  </div>
                </Link>
              </div>
            </div>
            <div className="hover:cursor-pointer hover:rounded-xl relative group">
              <div className="relative rounded-lg border-8 border-gray-800">
                <img
                  src="/chaufa.jpg"
                  alt="BG"
                  className="rounded-md w-96 max-sm:w-80 transition-opacity duration-300 h-[20rem]"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
                <span className="font-bold text-3xl">ORIENTAL</span>
                <p className="font-medium text-sm">
                  Contamos con una pequeña seccion de platillos orientales como
                  el arroz chaufa y su buen mostrito para ellos podra deleitar
                  una buena combinacion de estos dos productos
                </p>
                
                <Link to="../Carta" className="py-4 transition delay-150 duration-300 ease-in-out">
                  <div className=" bg-slate-500 border-4 flex items-center justify-center h-10 w-20 py-4 rounded-lg">
                    CARTA
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <div className="bg-fondo2  bg-contain h-[40rem]">
        <h2 className=" text-white text-center font-extrabold text-3xl max-sm:text-3xl py-12 ">
          NUESTROS MEJORES PRODUCTOS
        </h2>
        <div className="py-5 flex max-sm:flex-col items-center justify-center gap-8 max-sm:gap-10 max-sm:mx-4 mb-0 z-30">
          <div className="hover:cursor-pointer relative group border-stone-800 border-8 rounded-xl">
            <div className="relative">
              <img
                src="/1 POLLO A LA BRASA + UN CUARTO + GASEOSA.png"
                alt="BG"
                className="rounded-md w-[24rem] max-sm:w-72 transition-opacity duration-300 h-[21rem] border"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-3xl py-7">
                Pollo a la brasa y su Yapa
              </span>
              <p className=" flex font-semibold text-xl py-2  items-center justify-center ">
                Llevate tu pollo a la brasa + un cuarto de yapa + su gaseosa
                helada y sus acompañantes
              </p>

              <Link to="../Carta" className="py-4">
                <div className="bg-slate-500 border-4 flex items-center justify-center h-10 w-20 py-4 rounded-lg">
                  CARTA
                </div>
              </Link>
            </div>
          </div>
          <div className="hover:cursor-pointer relative group border-stone-800 border-8 rounded-xl">
            <div className="relative">
              <img
                src="/MEDIO_POLLO_A_LA_BRASA.webp"
                alt="BG"
                className="rounded-md w-[23rem] max-sm:w-[23rem] transition-opacity duration-300 h-[21rem]"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-4xl flex justify-center items-center py-4">
                Medio Pollo{" "}
              </span>
              <p className="font-medium text-lg flex items-center justify-center py-4">
                Disfruta tu medio pollo caliente con su ensalada sus cremas de
                casa con sus papas doradas
              </p>
              <Link to="../Carta" className="py-4">
                <div className="bg-slate-500 border-4 flex items-center justify-center h-10 w-20 py-4 rounded-lg">
                  CARTA
                </div>
              </Link>
            </div>
          </div>
          <div className="hover:cursor-pointer relative group border-stone-800 border-8 rounded-xl">
            <div className="relative">
              <img
                src="/parrilla.jpg"
                alt="BG"
                className="rounded-md w-[23rem] max-sm:w-72 transition-opacity duration-300 h-[21rem]"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-6xl flex justify-center items-center py-4">
                Parrilla
              </span>
              <p className="font-medium text-lg py-4">
                Disfruta de una parrilla con esquisiteces de carnes como bife
                una chuleta 1/4 de pollo con 1 palillo de anticucho y mucho mas
                con tu porcion de papas
              </p>
              <Link to="../Carta" className="py-4">
                <div className="bg-slate-500 border-4 flex items-center justify-center h-10 w-20 py-4 rounded-lg">
                  CARTA
                </div>
              </Link>
            </div>
          </div>
          <div className="hover:cursor-pointer relative group border-stone-800 border-8 rounded-xl">
            <div className="relative">
              <img
                src="/CHAUFA_MIXTO.png"
                alt="BG"
                className="rounded-md w-[23rem] max-sm:w-72 transition-opacity duration-300 h-[21rem]"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-5xl flex justify-center items-center py-4">
                Chaufa Mixto
              </span>
              <p className="font-medium text-lg py-4">
                Disfruta de un arroz chaufa mixto contundente contiene pollo y
                chancho lo cual no hay que estar escojiendo si uno u otro que
                esperas :3
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
        <div className="flex bg-deligif h-[50rem] bg-cover bg-opacity-10 justify-center   ">
          <div className="bg-amber-800 w-[70rem] h-[20rem] bg-opacity-70 grid grid-cols-2  justify-center items-center mt-56">
            <img src="/Logo_sf.png"
                  className="ml-48 w-64 opacity-95"
            ></img>
            <div className="ml-5 flex flex-col text-yellow-50 items-start justify-center  py-3 font-deli text-6xl">Delivery
            <div className="flex text-4xl pt-1">Llámenos al:</div>
            <div className="pt-1 text-5xl">999999999/056-666666</div>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
