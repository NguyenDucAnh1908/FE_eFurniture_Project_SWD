//import axios from './customize-axios'
import axios from 'axios';

const fetchallBrand = () => {
    return axios.get("http://localhost:8080/api/v1/brand");
}


export {fetchallBrand};