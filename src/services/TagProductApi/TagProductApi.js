import axios from '../customize-axios';

const fetchallTagProduct = () => {
    return axios.get("/tag_product");
}

export {fetchallTagProduct};