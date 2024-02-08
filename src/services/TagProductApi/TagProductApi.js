import axios from 'axios';

const fetchallTagProduct = () => {
    return axios.get("http://localhost:8080/api/v1/tag_product");
}

export {fetchallTagProduct};