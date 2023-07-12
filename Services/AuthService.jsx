import axios from 'axios'

const API_URL = "https://commerce-back-2025.up.railway.app/registro"
const API_URL2 = "https://commerce-back-2025.up.railway.app/usuarios"

class AuthService{

    Register(data){
      return axios.post(API_URL, data);
    }

    Login(data){
      return axios.post(API_URL2, data);
    }

    Support(data){
      return axios.post(API_URL2, data);
    }  
}

export default new AuthService;