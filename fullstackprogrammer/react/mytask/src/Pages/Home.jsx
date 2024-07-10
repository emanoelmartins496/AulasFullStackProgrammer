import React, { useState } from 'react';
import { Button, Card} from "react-bootstrap";
import "../Styles/Home.css"

function Home() {
    const [curtiu, setCurtiu] = useState(false);

    const handleBotaoCurtir = () => {
        setCurtiu(!curtiu);
    };

    return (
        <div className="cards">
            <Card style={{ width: '18rem' }} className="mt-4 m-5 ">
                <Card.Img variant="top" src="https://picsum.photos/300" alt="Imagem do card" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="mt-4 m-5 ">
            <Card.Img variant="top" src="https://picsum.photos/200" alt="Imagem do card" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="mt-4 m-5 ">
            <Card.Img variant="top" src="https://picsum.photos/100" alt="Imagem do card" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
            </Card>

            <Button className="botao-card"
                onClick={handleBotaoCurtir}>
                {curtiu ? "Descurtir" : "Curtir"}
            </Button>
        </div>
    );
}

export default Home;