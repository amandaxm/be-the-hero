import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3333'//url que repete em todas as paginas

})
export default api;