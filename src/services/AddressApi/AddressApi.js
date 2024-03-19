import axios from '../customize-axios'

const fetchAllAddress = (id) =>{
    return axios.get(`/address/get_all_address_by_id/${id}?page=0&size=10`)
}

export {fetchAllAddress};