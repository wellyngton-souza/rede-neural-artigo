import ClassificarFruta from "../content/classificaFruta";
import GameDino from "../content/gameDino";
import SocialMedia from "../components/socialMedia";

import { FaCheck } from 'react-icons/fa';
import React, { useState } from "react";

import imgRede from "../assets/Neural_network.svg";

const Home = () =>{
    const [theme, setTheme] = useState<boolean>(true);

    /*
    const mudarDark = () =>{
        setTheme(!theme);
    }
    */

    const TitleSite: React.FC<{ name: string }> = (props) =>{
        return (
            <h1 className="text-7xl font-bold">{props.name}</h1>
        );
    }

    const TitleContent: React.FC<{ name: string }> = (props) =>{
        return (
            <h3 className="text-4xl font-bold">{props.name}</h3>
        );
    }

    const ParagraphContent: React.FC<{ name: string }> = (props) =>{
        return(
            <p className="text-lg">{props.name}</p>
        );
    }

    return (
        <>
            <main
                data-dark={theme}
                className="min-h-screen data-[dark=true]:bg-dark data-[dark=true]:text-dark">
                <article className="flex">
                    <section className="min-h-screen hover:w-52 hidden md:flex right-0 md:left-0 w-14 pl-5 pt-8 hover:pr-16 transition-all overflow-hidden fixed flex flex-col gap-8">
                        <h2 className="text-4xl font-bold">w</h2>
                        <div className="grid gap-10 grid-cols-2">
                            <FaCheck size="20" />
                            <p className="cursor-pointer hover:text-blue-200">Instruções</p>
                            <FaCheck size="20" />
                            <p className="cursor-pointer hover:text-blue-200">Descida do Gradiente</p>
                            <FaCheck size="20" />
                            <p className="cursor-pointer hover:text-blue-200">Convolução</p>
                            <FaCheck size="20" />
                            <p className="cursor-pointer hover:text-blue-200">Pooling</p>
                            <FaCheck size="20" />
                            <p className="cursor-pointer hover:text-blue-200">atenção multi-head</p>
                        </div>
                    </section>
                    <section className="flex md:py-32 pb-32 grow justify-center">
                        <div style={{ maxWidth: "800px" }} className="flex flex-col gap-32">
                            <div className={`p-8 md:p-16 rounded-2xl flex flex-col gap-8 bg-opacity-70 ${theme ? "bg-gray-700" : "bg-gray-200"}`}>
                                <TitleSite name="Artigo Redes Neurais" />
                                <ParagraphContent
                                    name="Você já se perguntou, o que é uma rede neural ? Rede neural possui uma estrutura que consiste em (っ◔◡◔)っ ♥ imitar ♥ o funcionamento do celebro humano, nela utilizasse de unidades interconectadas chamada neurônios, sendo bastante utilizada para processamento de dados, em tarefas que incluem reconhecimento de padrões, classificação, regressão entre outros."
                                />
                                <TitleContent name="Conversão notas de Alunos" />
                                <ParagraphContent
                                    name="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium vel beatae incidunt quos at. Quod consequatur numquam incidunt nihil explicabo maiores voluptas consectetur nesciunt magni, perferendis aspernatur eligendi ab vel?"
                                />
                                <img src={imgRede} alt="redes" />
                                <TitleContent name="Classificar Frutas" />
                                <ClassificarFruta />
                                <TitleContent name="Game Dino" />
                                <GameDino />
                            </div>
                            <SocialMedia />
                        </div>
                    </section>
                </article>
            </main>
        </>
    );
}

export default Home;