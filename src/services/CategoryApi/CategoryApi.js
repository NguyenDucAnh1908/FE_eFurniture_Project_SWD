import axios from 'axios';

const fetchallCategory = () => {
    return axios.get("http://localhost:8080/api/v1/categories");
}

export {fetchallCategory};