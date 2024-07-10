import React, { useState } from 'react';
import "./Post.css"


function Post() {
    const [curtiu, setCurtiu] = useState(false);

    const handleBotaoCurtir = () => {
        setCurtiu(!curtiu);
    };

    return (
        <section className="post">
            <h1>SoulCodebook</h1>
                <p className="descricao">
                    A SoulCodeBook é uma plataforma inovadora que redefine a 
                    interação social e profissional online. Fundada com a missão de conectar 
                    pessoas de todo o mundo através do conhecimento e da colaboração, a SoulCodeBook 
                    oferece uma rede robusta e dinâmica onde indivíduos podem compartilhar ideias, 
                    aprender uns com os outros e expandir suas redes de contatos de maneira significativa.
                    Com recursos avançados de personalização de perfil e grupos temáticos, a SoulCodeBook 
                    permite que seus usuários criem conexões autênticas e relevantes tanto no âmbito pessoal 
                    quanto profissional. Além disso, a plataforma se destaca por seu compromisso com a 
                    privacidade e segurança dos dados, garantindo um ambiente confiável para discussões 
                    abertas e construtivas.
                    Ao integrar ferramentas de aprendizado colaborativo e networking, 
                    a SoulCodeBook se posiciona como um líder no setor de redes sociais empresariais, 
                    capacitando indivíduos e organizações a alcançarem seu potencial máximo através da 
                    troca de conhecimento e oportunidades.
                </p>
            <button className="botoes" onClick={handleBotaoCurtir}>
                {curtiu ? "Descurtir" : "Curtir"}
            </button>
            {curtiu && <p>Obrigado por curtir nossa plataforma!</p>}
        </section>
    );
}

export default Post;
