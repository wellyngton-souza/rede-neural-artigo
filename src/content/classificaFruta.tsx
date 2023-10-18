import { useEffect, useState } from "react";

const ClassificarFruta = () =>{
    const [yellow, setYellow] = useState(0);
    const [red, setRed] = useState(0);
    const [roughness, setRoughness] = useState(0);

    const [resultado, setResultado] = useState("");
    const [resultadoValue, setResultadoValue] = useState(0);

    useEffect(()=>{
        const classificar = () =>{
            let inputs = [yellow / 255, red / 255, roughness];
            // Valores Rede Neural
            let weights = [2.5, -1.5, 1];
            let bias = -0.5;
            
            let sum = 0;
            
            for (let i = 0; i < inputs.length; i++) {
                sum += inputs[i] * weights[i];
            }
            
            sum += bias;
            let prediction: number = 1 / (1 + Math.exp(-sum)); // Função Sigmoid 1 / (1 + Math.exp(-sum)
            setResultado(prediction < 0.5 ? "é uma maça" : "é uma banana");
            setResultadoValue(prediction);
        }

        classificar();
    },[yellow, red, roughness]);

    return(
        <div>
            <h2 className="text-lg pb-2">Classificação</h2>
            <p>yellow</p>
            <input type="range" onChange={(e) => setYellow(parseInt(e.target.value))} />
            <p>red</p>
            <input type="range" onChange={(e) => setRed(parseInt(e.target.value))} />
            <p>roughness</p>
            <input type="range" onChange={(e) => setRoughness(parseInt(e.target.value))} />
            <p>Resultado da Classificação: {resultado}</p>
            <p>Score: {resultadoValue}</p>
        </div>
    );
}

export default ClassificarFruta;