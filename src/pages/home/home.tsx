import { info } from "../../helpers";
import { Carrusel } from "../../components/Carrusel";

//import { Navbar } from "../../components";

const Home = () => {
  return (
    <>
      <section className="bg-slate-50  py-36 ">
        <div className="container mx-2">
          <div className="flex items-center justify-center flex-col gap-8">
            <Carrusel slides={info} />
          </div>
        </div>
      </section>
      <div className="bg-yellow-500  p-5 flex justify-center font-extrabold text-xl">Hambre? dinos cual es tu hambre</div>
      <div>
        <div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
