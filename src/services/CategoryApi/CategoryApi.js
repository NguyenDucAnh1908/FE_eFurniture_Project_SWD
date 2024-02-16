import axios from '../customize-axios'

const fetchallCategory = () => {
    return axios.get("/categories");
}

export {fetchallCategory};