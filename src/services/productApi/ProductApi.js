import axios from 'axios';

const fetchallProduct = (page) => {
    return axios.get("http://localhost:8080/api/v1/products/get_all");
}

export {fetchallProduct};