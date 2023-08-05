import { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import axios from 'axios';

interface Conteudo {
  id: number;
  content: string;
}

const NavBar = () =>{
  return(
    <div className="h-16 flex items-center justify-between text-white px-8 bg-gray-800">
      <p>Wellyngton Souza</p>
      <div className="flex">
        <a className="px-2 hover:text-red-500" href="#a">
          <FaInstagram />
        </a>
        <a className="px-2 hover:text-blue-500" href="https://linkedin.com/in/wellyngton-de-souza/">
          <FaLinkedin />
        </a>
        <a className="px-2 hover:text-gray-500" href="https://github.com/wellyngton-souza">
          <FaGithub />
        </a>
      </div>
    </div>
  )
}

const App = () =>{
  const [conteudo, setConteudo] = useState<Conteudo[]>([]);

  useEffect(()=>{
    axios.get("https://wellyngton-souza.000webhostapp.com/RedeNeural/conteudo.php")
      .then((e) => {
        setConteudo(e.data)
      })
      .catch((e) => console.log(e))
  },[]);

  return (
    <>
      <main>
        <article>
          <section>
            <div className="flex justify-center bg-gray-100">
              <div className="md:w-2/3 xl:w-1/2 min-h-screen bg-white">
                <NavBar />
                <div className="p-8">
                  <h1 className="text-xl pb-4">Redes Neurais</h1>
                  {
                    conteudo.map((item) => (
                        <p key={item.id}>{item.content}</p>
                    ))
                  }
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default App;
