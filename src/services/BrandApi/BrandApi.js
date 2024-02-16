//import axios from './customize-axios'
import axios from '../customize-axios';

const fetchallBrand = () => {
    return axios.get("/brand");
}


export {fetchallBrand};