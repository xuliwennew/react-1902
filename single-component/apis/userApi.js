
import api from "../commons/api"


export default {

    async getUser(){
       let data = await api.get('http://localhost:3000/api/user')
       return data;
    }
}

