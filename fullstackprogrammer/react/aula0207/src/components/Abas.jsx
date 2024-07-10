import { useState } from "react";
import './Abas.css';

function Abas() {
  const [aba, setAba] = useState("Impacto Social");

  return (
    <section>
      <div className="botoes">
        <button className={aba === "Impacto Social" ? "ativo" : ""}
          onClick={() => setAba("Impacto Social")}>Impacto Social</button>

        <button className={aba === "Empregabilidade" ? "ativo" : ""}
          onClick={() => setAba("Empregabilidade")}>Empregabilidade</button>

        <button className={aba === "Tecnologico" ? "ativo" : ""}
          onClick={() => setAba("Tecnologico")}>Tecnologico</button>
      </div>

      <div>
        {aba === "Impacto Social" &&
          <section>
            <h2>Impacto Social</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rerum cupiditate ab consequuntur alias fuga ratione optio eius vel?</p>
          </section>}

        {aba === "Empregabilidade" &&
          <section>
            <h2>Empregabilidade</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rerum cupiditate ab consequuntur alias fuga ratione op</p>
          </section>}

        {aba === "Tecnologico" &&
          <section>
            <h2>Tecnologico</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rerum cupiditate ab consequuntur </p>
          </section>}
      </div>
    </section>
  );
}

export default Abas;
