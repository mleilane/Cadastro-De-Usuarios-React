
import axios from "axios"; // importando a biblioteca 

// configuracoes do axio 
const api = axios.create({
baseURL: 'http://localhost:5000' // endereço do nosso servidor criado no proj node 
})

export default api