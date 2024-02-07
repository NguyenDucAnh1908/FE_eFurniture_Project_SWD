//import axios from './customize-axios'
import axios from 'axios';

const fetchallUser = (page) => {
    return axios.get("http://localhost:8080/api/v1/products/get_all");
}

const fetchAllProductByCategory = (category) => {
    return axios.get("http://localhost:8080/api/v1/categories");
};
const fetchallBrand = () => {
    return axios.get("http://localhost:8080/api/v1/brand");
}

export {fetchallUser, fetchallBrand};