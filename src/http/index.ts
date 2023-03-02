import axios, { AxiosInstance } from "axios"

const clienteHttp: AxiosInstance = axios.create({
    baseURL: "https://my-json-server.typicode.com/raphaelfacco/alura-tracker/"
})

export default clienteHttp