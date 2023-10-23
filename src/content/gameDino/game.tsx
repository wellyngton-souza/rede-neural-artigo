import React, { useRef, useState, useEffect } from "react";
import img_dino from "../../assets/gameDino/Dino_Surf.gif";
import img_cacto from "../../assets/gameDino/cacto.png";

const GameDino = () =>{
    const dino = useRef() as React.MutableRefObject<HTMLImageElement>;
    const cacto = useRef() as React.MutableRefObject<HTMLImageElement>;

    const [pulo, setPulo] = useState(false);
    const [cair, setCair] = useState(false);
    const [speedCacto, setspeedCacto] = useState(20);
    const [quadradoWidth, setQuadradoWidth] = useState(20);
    const [pontos, setPontos] = useState(0);
    const [distancia, setDistancia] = useState(0);
    const [alturaPulo, setAlturaPulo] = useState(0.5 * speedCacto);
    const [duracaoPulo, setDuracaoPulo] = useState(5000 / speedCacto);
    
    const [gameStart, setGameStart] = useState(true);

    const pegarPosit = (direcao: string, elemento: React.MutableRefObject<HTMLImageElement>): number => {
        const estiloComputado = getComputedStyle(elemento.current);
        return parseFloat(estiloComputado.getPropertyValue(direcao));
    }
    
    const pular = () =>{
        if(pulo){
            let topDino = pegarPosit("top", dino);
            dino.current!.style.top = (topDino - alturaPulo) + "px";
        } else if(cair){
            let topDino = pegarPosit("top", dino);
            dino.current!.style.top = (topDino + alturaPulo) + "px";
        } else{
            dino.current!.style.top = "70%";
        }
    }
        
    const cactoAndar = () =>{
        let leftCacto = pegarPosit("left", cacto);
        cacto.current!.style.left = (leftCacto - speedCacto) + "px";
        
        if(leftCacto + quadradoWidth < 0){
            cacto.current!.style.left = "100%";
            setPontos(pontos + 1);
        }
        
        return leftCacto;
    }
    
    const ativaPulo = () =>{
        setPulo(true);
        setTimeout(()=>{
            setPulo(false);
            setCair(true);
            setTimeout(()=>{
                setCair(false);
            }, duracaoPulo);
        }, duracaoPulo);
        }
        
    const pontuacao = () =>{
        let leftDino = pegarPosit("left", dino);
        let leftCacto = pegarPosit("left", cacto);
        
        setDistancia(leftCacto - leftDino);
    }

    const mudarTudo = (e: any) =>{
        setQuadradoWidth(e / 3);
        dino.current!.style.height = e + "px";
        dino.current!.style.width = e + "px";
        cacto.current!.style.height = e + "px";
        cacto.current!.style.width = e + "px";
    }

    const morte = () =>{
        if(pulo || cair){
            return;
        }
        
        if(distancia <= quadradoWidth + quadradoWidth){
            setGameStart(false);
        } 
    }
    
    const restart = () =>{
        setGameStart(true);
    }
    
    useEffect(() => {
        document.addEventListener("keydown", (e) => {
          if (pulo || cair) {
            return;
          }
    
          if (e.key === ' ') {
            ativaPulo();
          }
        });
    
        const intervalId = setInterval(() => {
          if (gameStart) {
            pular();
            cactoAndar();
            pontuacao();
            morte();
          }
        }, 100);
    
        return () => {
          clearInterval(intervalId);
        };
    }, []);

    return(
        <section>
            <div className="w-full h-96 relative border border-black">
                {distancia >= 0 && (
                    <div>
                        Distancia: {distancia.toFixed(0)} <br />
                        Pontuação: {pontos}
                    </div>
                )}
                {gameStart && <p id="FimJogo">Fim de Jogo</p>}
                <img className="w-16 h-16 absolute" src={img_dino} alt="img_game" ref={dino} />
                <img className="w-16 h-16 absolute" src={img_cacto} alt="img_game" ref={cacto} />
            </div>
            <div className="flex">
                <div>
                    <p>Speed Dino: <input type="range" onChange={(e) => setspeedCacto(parseInt(e.target.value))} id="1" max="50" /></p>
                    <p>altura Pulo: <input type="range" onChange={(e) => setAlturaPulo(parseInt(e.target.value))} id="2" max="20" /></p>
                    <p>Duração Pulo: <input type="range" onChange={(e) => setDuracaoPulo(parseInt(e.target.value))} id="3" max="1000" /></p>
                    <p>Tamanho: <input type="range" onChange={(e) => mudarTudo(e)} id="4" max="200" /></p>
                </div>
                {
                    gameStart &&
                    <button id="recomecar" onClick={restart}>Recomeçar</button>
                }
            </div>
        </section>
    );
}

export default GameDino;