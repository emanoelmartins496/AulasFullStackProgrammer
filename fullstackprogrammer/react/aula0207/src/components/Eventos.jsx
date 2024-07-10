function Eventos() {

    function handleClick(){
        alert("Você Clicou!");
    }

    return (
        <section>
            <button onClick={handleClick}>Clique Aqui</button>
                <button onClick={() => {
                    alert("Clique Novamente!")
                    alert("Novamente!")
                    }}>Clique Novamente</button>
                    <h1 onMouseEnter={() => alert("Olá!")}>Titulo</h1>
        </section>
    )
}

export default Eventos;