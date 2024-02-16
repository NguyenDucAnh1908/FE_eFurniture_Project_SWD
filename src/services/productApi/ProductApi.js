//import axios from 'axios';
import axios from '../customize-axios'

const fetchallProduct = () => {
    return axios.get("/products/get_all");
}




export {fetchallProduct};