import axios from "axios";

export async function getClientes() {
    const response = await axios.get("http://localhost:3000/clientes");

    return response.data;
}