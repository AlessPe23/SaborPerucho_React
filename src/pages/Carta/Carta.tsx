import "tailwindcss/tailwind.css";

const Carta = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-36">
      <h1 className="text-3xl font-bold mb-4">CARTA SABOR PERUCHO</h1>
      <h2 className="text-2xl mb-4 border-b-2 border-gray-300">
        POLLOS A LA BRASA
      </h2>
      <div className="flex flex-wrap justify-center mb-12 mt-4">
        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./UN_CUARTO_POLLO_A_LA_BRASA.webp"}
            alt="1/4 POLLO A LA BRASA"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            1/4 POLLO A LA BRASA
          </h3>
          <p className="text-justify p-2 m-2">
            1/4 POLLO A LA BRASA + PAPAS + ENSALADA + CREMAS
          </p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/15.00</p>
        </div>

        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./MEDIO_POLLO_A_LA_BRASA.webp"}
            alt="1/2 POLLO A LA BRASA"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            1/2 POLLO A LA BRASA
          </h3>
          <p className="text-justify p-2 m-2">
            1/2 POLLO A LA BRASA + PAPAS + ENSALADA + CREMAS
          </p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/29.00</p>
        </div>

        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./POLLO_A_LA_BRASA _+_GASEOSA.webp"}
            alt="POLLO A LA BRASA + GASEOSA"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            POLLO A LA BRASA + GASEOSA
          </h3>
          <p className="text-justify p-2 m-2">
            1 POLLO A LA BRASA + GASEOSA + PAPAS + ENSALADA + CREMAS
          </p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/57.00</p>
        </div>
      </div>

      <h2 className="text-2xl mb-4 border-b-2 border-gray-300">PROMOCIONES</h2>
      <div className="flex flex-wrap justify-center mb-12 mt-4">
        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./POLLO A LA BRASA + CHAUFA.webp"}
            alt="POLLO A LA BRASA + CHAUFA"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            POLLO A LA BRASA + CHAUFA
          </h3>
          <p className="text-justify p-2 m-2">
            1 POLLO A LA BRASA + CHAUFA + GASEOSA + PAPAS + ENSALADA + CREMAS
          </p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/67.00</p>
        </div>
        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./1 POLLO A LA BRASA + UN CUARTO + GASEOSA.png"}
            alt="1 POLLO A LA BRASA + 1/4 + GASEOSA"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            1 POLLO A LA BRASA + 1/4 + GASEOSA
          </h3>
          <p className="text-justify p-2 m-2">
            POLLO A LA BRASA + 1/4 + GASEOSA + PAPAS + ENSALA + CREMAS
          </p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/67.00</p>
        </div>
      </div>

      <h2 className="text-2xl mb-4 border-b-2 border-gray-300">BROASTER'S</h2>
      <div className="flex flex-wrap justify-center mb-12 mt-4">
        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./PECHO_BROASTER.png"}
            alt="PECHO BROASTER"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            PECHO BROASTER
          </h3>
          <p className="text-justify p-2 m-2">
            PECHO BROASTER + PAPAS + ENSALADA
          </p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/11.00</p>
        </div>

        <div
          className="shadow-lg bg-gray-50 ounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./ALITA_BROASTER.png"}
            alt="ALITA BROASTER"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            ALITA BROASTER
          </h3>
          <p className="text-justify p-2 m-2">
            ALITA BROASTER + PAPAS + ENSALADA
          </p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/9.00</p>
        </div>

        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./PIERNA_BROASTER.png"}
            alt="PIERNDA BROASTER"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            PIERNA BROASTER
          </h3>
          <p className="text-justify p-2 m-2">
            PIERNA BROASTER + PAPAS + ENSALADA
          </p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/10.00</p>
        </div>

        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./ENTRE_PIERNA_BROASTER.png"}
            alt="ENTRE PIERNA BROASTER"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            ENTRE PIERNA BROASTER
          </h3>
          <p className="text-justify p-2 m-2">
            ENTRE PIERNA BROASTER + PAPAS + ENSALADA
          </p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/10.00</p>
        </div>
      </div>

      <h2 className="text-2xl mb-4 border-b-2 border-gray-300">MOSTRITOS</h2>
      <div className="flex flex-wrap justify-center mb-12 mt-4">
        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./UN_OCTAVO_+_MOSTRITO.png"}
            alt="1/8 + MOSTRITO"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            1/8 + MOSTRITO
          </h3>
          <p className="text-justify p-2 m-2">CHAUFA + 1/8 DE POLLO + PAPAS</p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/14.00</p>
        </div>

        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./UN_CUARTO_+_MOSTRITO.png"}
            alt="1/4 + MOSTRITO"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            1/4 + MOSTRITO
          </h3>
          <p className="text-justify p-2 m-2">CHAUFA + 1/4 DE POLLO</p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/18.00</p>
        </div>
      </div>

      <h2 className="text-2xl mb-4 border-b-2 border-gray-300">EXTRAS</h2>
      <div className="flex flex-wrap justify-center mb-12 mt-4">
        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./PORCIÓN_DE_ARROZ.png"}
            alt="PORCIÓN DE ARROZ"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            PORCIÓN DE ARROZ
          </h3>
          <p className="text-justify p-2 m-2">PORCIÓN DE ARROZ PERSONAL</p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/5.00</p>
        </div>

        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./PORCIÓN_DE_ENSALADA.png"}
            alt="PORCIÓN DE ENSALADA"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            PORCIÓN DE ENSALADA
          </h3>
          <p className="text-justify p-2 m-2">PORCIÓN DE ENSALADA PERSONAL</p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/5.00</p>
        </div>
      </div>

      <h2 className="text-2xl mb-4 border-b-2 border-gray-300">CHAUFAS</h2>
      <div className="flex flex-wrap justify-center mb-12 mt-4">
        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./CHAUFA_DE_CHANCHO.png"}
            alt="CHAUFA DE CHANCHO"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            CHAUFA DE CHANCHO
          </h3>
          <p className="text-justify p-2 m-2">PLATO DE CHAUFA DE CHANCHO</p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/16.00</p>
        </div>

        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./CHAUFA_MIXTO.png"}
            alt="CHAUFA MIXTO"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            CHAUFA MIXTO
          </h3>
          <p className="text-justify p-2 m-2">PLATO DE CHAUFA MIXT</p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/16.00</p>
        </div>

        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./CHAUFA_DE_CARNE.png"}
            alt="CHAUFA DE CARNE"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            CHAUFA DE CARNE
          </h3>
          <p className="text-justify p-2 m-2">PLATO DE CHAUFA DE CARNE</p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/16.00</p>
        </div>

        <div
          className="shadow-lg bg-gray-50 rounded-lg mx-5 mb-5 max-w-sm transition-transform hover:scale-105"
          style={{ width: "300px" }}
        >
          <img
            src={"./CHAUFA_DE_POLLO.png"}
            alt="CHAUFA DE POLLO"
            className="w-100% h-auto"
          />
          <h3 className="text-xl text-center font-semibold p-2 m-2">
            CHAUFA DE POLLO
          </h3>
          <p className="text-justify p-2 m-2">PLATO DE CHAUFA DE POLLO</p>
          <p className="text-2xl font-bold text-orange-600 p-2 m-2">S/12.00</p>
        </div>
      </div>
    </div>
  );
};
export default Carta;
