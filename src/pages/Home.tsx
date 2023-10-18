import NavBar from '../components/navbar';
import Rodape from '../components/footer';
import { Link } from 'react-router-dom';
import ClassificarFruta from '../content/classificaFruta';
import RouteContent from '../routes/Content';

const Home = () =>{
  return (
    <>
      <main>
        <article>
          <section>
            <div className="flex justify-center bg-gray-100">
              <div className="md:w-9/12 xl:w-6/12 min-h-screen flex flex-col bg-white">
                <NavBar />
                <div className="md:flex grow">
                  <div className="min-w-96 p-8 grow">
                    <h1 className="text-xl pb-4">Redes Neurais</h1>
                    <RouteContent />
                    <ClassificarFruta />
                  </div>
                  <div className="p-8">
                    <h1 className="text-xl pb-4">Redes Neurais</h1>
                    <div className="w-64">
                      <p className="mb-2 hover:underline"><Link to="intro">Introdução</Link></p>
                      <p className="my-2 hover:underline"><Link to="gradiente">Descida do Gradiente</Link></p>
                      <p className="my-2 hover:underline"><Link to="">Operações de Convolução</Link></p>
                      <p className="my-2 hover:underline"><Link to="">Operações de Pooling</Link></p>
                      <p className="my-2 hover:underline"><Link to="">atenção multi-head</Link></p>
                      <p className="my-2 hover:underline"><Link to="">Cálculos de Aprendizado Não Supervisionado</Link></p>
                    </div>
                  </div>
                </div>
                <Rodape />
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default Home;
