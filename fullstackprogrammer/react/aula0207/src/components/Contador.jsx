import { useState } from "react";
import './Contador.css';

function Contador({valorInicial = 0}) {

    const [numero, setNumero] = useState(valorInicial);

    function handleIncremento() {
        setNumero(numero +1);
        console.log("Evento Incremento: ", numero);
    }

    function handleDecremento() {
        setNumero(numero -1);
        console.log("Evento Decremento: ", numero);
    }

    function handleIncremento100() {
        setNumero(numero +100);
        console.log("Evento Incremento100: ", numero);
    }

    function handleZerar() {
        setNumero(0);
    }


    return (
        <section>
            <h2 className={numero % 2 === 0? "par":"impar"}
            >Contagem: {numero}</h2>
            <button onClick={handleIncremento}> +1 </button>
            <button onClick={handleDecremento}> -1 </button>
            <button onClick={handleIncremento100}> +100 </button>
            <button onClick={handleZerar}> Zerar </button>
        </section>
    )
}

export default Contador;