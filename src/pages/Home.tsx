import NavBar from '../components/navbar';
import Rodape from '../components/footer';
import { Link } from 'react-router-dom';
import ClassificarFruta from '../content/classificaFruta';
import RouteContent from '../routes/Content';
import GameDino from '../content/gameDino/game';
import React, { useState } from 'react';

const Home = () =>{
  const [theme, setTheme] = useState<string>("light");

  const mudarDark = () =>{
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <main className={`text-${theme} bg-${theme}`}>
        <article>
          <section>
            <div className="flex justify-center tracking-wide">
              <div className="md:w-9/12 xl:w-9/12 min-h-screen flex flex-col">
                <NavBar theme={theme} mudarDark={mudarDark} />
                <div className="md:flex grow">
                  <div className="p-8 font-bold">
                    <h1 className="text-xl pb-4">Redes Neurais</h1>
                    <div className="w-64">
                      <p className={`mb-2 p-2 hover:underline rounded-md ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100"}`}><Link to="intro">Introdução</Link></p>
                      <p className={`my-2 p-2 hover:underline rounded-md ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100"}`}><Link to="gradiente">Descida do Gradiente</Link></p>
                      <p className={`my-2 p-2 hover:underline rounded-md ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100"}`}><Link to="">Convolução</Link></p>
                      <p className={`my-2 p-2 hover:underline rounded-md ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100"}`}><Link to="">Pooling</Link></p>
                      <p className={`my-2 p-2 hover:underline rounded-md ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100"}`}><Link to="">atenção multi-head</Link></p>
                      <p className={`my-2 p-2 hover:underline rounded-md ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100"}`}><Link to="">Cálculos de Aprendizado Não Supervisionado</Link></p>
                    </div>
                  </div>
                  <div className="min-w-96 p-8 grow">
                    <h1 className="text-2xl tracking-wider font-bold pb-4">Redes Neurais</h1>
                    <RouteContent />
                    <ClassificarFruta />
                    <GameDino />
                  </div>
                </div>
                <Rodape theme={theme} />
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default Home;