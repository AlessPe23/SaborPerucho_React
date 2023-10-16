import React from "react";
const About = () => {
  return (
    <>
      <div
        className="bg-cover bg-fondoabout w-full h-[800px] bg-center relative flex items-center justify-center 
      max-sm:w-full max-sm:bg-cover max-sm:bg-fondo1 max-sm:h-[350px] max-sm:bg-center max-sm:relative max-sm:flex max-sm:items-center max-sm:justify-center"
      >
        <div className="bg-white mx-96 text-orange-950 p-5 w-[900px] opacity-70 absolute text-5xl top-48
        font-Itim text-center drop-shadow-2xl max-sm:absolute max-sm:py-4 max-sm:px-4 max-sm:opacity-60 
        max-sm:font-Itim max-sm:text-xl flex flex-col gap-8 max-md:mx-32 max-sm:mx-5 max-sm:gap-1 max-sm:w-[300px]
          shadow-lg shadow-slate-300 ">
          <h2 className="md:text-6xl">¿Quiénes somos?</h2>
          <p className="text-2xl max-sm:text-xs">
            En Sabor Perucho, somos un equipo apasionado por la gastronomía
            peruana y comprometidos en brindar a nuestros clientes una
            experiencia culinaria única. Con profundos lazos con la cultura
            peruana.
          </p>
        </div>
      </div>
      <div className="container mx-auto relative flex justify-center max-sm:mx-auto max-sm:relative max-sm:justify-center">
        {/* Mision | Vision */}
        <div className="bg-slate-950 text-white p-8 flex  gap-4 w-[850px] mx-auto absolute top-1/2 transform -translate-y-1/2 drop-shadow-xl max-sm:p-4 max-sm:flex-col max-sm:gap-2 max-sm:w-[340px] max-sm:h-[250px] max-sm:mx-auto max-sm:absolute max-sm:top-0.5 max-sm:transform max-sm:-translate-y-[30%] shadow-lg
                rounded-md shadow-sky-900">
          <div className="flex flex-col items-center justify-center gap-2 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-1">
            <h2 className="text-3xl font-bold max-sm:text-xs max-sm:font-bold">
              Misión
            </h2>
            <span className="font-normal text-xl text-center max-sm:font-medium max-sm:text-xs max-sm:text-center">
              En Sabor Perucho, nuestra misión es llevar a nuestros clientes la
              auténtica y deliciosa experiencia de la cocina peruana, ofreciendo
              platos de pollo de alta calidad sazonados con los sabores únicos
              de Perú.
            </span>
          </div>
          <div className="w-2 bg-white "></div>
          <div className="flex flex-col items-center justify-center gap-2 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:gap-1">
            <h2 className="text-3xl font-bold max-sm:text-sm ">Visión</h2>
            <span className="font-normal text-xl text-center max-sm:text-xs">
              La visión de Sabor Perucho es convertirse en el destino preferido
              para los amantes de la comida peruana, tanto locales como
              visitantes. Queremos ser reconocidos por nuestra excelencia en la
              preparación de pollo, los auténticos sabores peruanos y la calidad
              de nuestro servicio.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-fondohorno h-screen pt-64 bg-cover max-sm:bg-fondoAboutCenter  max-sm:w-full max-sm:h-[220px]">
      <div className=" flex flex-col gap-4 justify-center items-center">
        <div className=" flex items-center justify-center  bg-slate-200 w-[30rem] rounded-2xl shadow-orange-300 shadow-lg ">
        <h3 className="text-center font-bold text-3xl max-sm:text-3xl py-10 ">
          NUESTROS VALORES
        </h3>
        </div>
        <div className="flex max-sm:flex-col items-center justify-center gap-8 max-sm:gap-10 max-sm:mx-4 py-10 ">
          <div className="hover:cursor-pointer relative group rounded-5xl">
            <div className="relative shadow-lg shadow-orange-300 rounded-xl">
              <img
                src="/Proactividad.webp"
                alt="BG"
                className="rounded-md w-[32rem] max-sm:w-72 transition-opacity duration-300 h-[20rem]  "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 "></div>
            </div>
            <div className=" absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-4xl p-4">Ser Proactivos</span>
              <p className="font-medium text-2xl">
                Teniendo una iniciativa, elaborando un plan de marketing
                individualizado a cada propiedad. Tratamos de adelantarnos a las
                situaciones adversas con el único objetivo de ofrecer un
                asesoramiento de calidad.
              </p>
            </div>
          </div>
          <div className="hover:cursor-pointer relative group">
            <div className="relative shadow-lg shadow-orange-700 rounded-2xl">
              <img
                src="/Pasion.webp"
                alt="BG"
                className="rounded-md w-[32rem] max-sm:w-72 transition-opacity duration-300 h-[20rem]"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-5xl p-4">Pasión</span>
              <p className="font-medium text-xl">
                Disfrutamos de nuestro trabajo, contando con expertos en la
                materia, dedicados con nuestra labor intermediaria para lograr
                sacar el mayor rendimiento de nuestras propiedades para
                beneficios de nuestros clientes.
              </p>
            </div>
          </div>
          <div className="hover:cursor-pointer relative group">
            <div className="relative shadow-lg shadow-orange-300 rounded-xl">
              <img
                src="/Profesional.avif"
                alt="BG"
                className="rounded-md w-[32rem] max-sm:w-72 transition-opacity duration-300 h-[20rem]"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-3xl p-3 ">Profesionalidad</span>
              <p className="font-medium text-xl">
                Siempre te ofreceremos soluciones, lo hacemos desde el
                conocimiento técnico de la materia. Trabajamos con propiedades
                con alto potencial por lo que la exigencia en el servicio debe
                ser máxima. En H.O. CONSTRUCTORES E.I.R.L. cada cliente es
                único; respetamos sus preferencias por encima de todo y nos
                adaptamos a ellas.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default About;