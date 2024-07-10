import { Container, Accordion, Button, Alert } from "react-bootstrap";

function Ajuda() {
    return (
        <main className="mt-4">
            <Container>
                    <h1>Ajuda</h1>
                    <hr />
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Sobre o Sistema</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Deleniti eius dicta ipsum at accusantium 
                                        molestias exercitationem pariatur sapiente eveniet distinctio.
                                    </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Minha Pagina</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Deleniti eius dicta ipsum at accusantium 
                                        molestias exercitationem pariatur sapiente eveniet distinctio.
                                    </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>

                    <Button 
                    className="mt-1 me-1">Entre em Contato
                    </Button>

                    <Button 
                    variant="danger" 
                    className="mt-1 me-1">Denunciar
                    </Button>

                    <Alert 
                    classeName="mt-1"
                    variant="warning">Atenção, estamos em manutenção!
                    </Alert>
            </Container>
        </main>
    )
}

export default Ajuda;