import api from "../commons/api"

export default {
    async getProducts(){
        let data = await api.get("http://localhost:3000/api/products")
        return data;
    }
}
