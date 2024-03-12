import axios from '../customize-axios'

const fetchAllAddress = () =>{
    return axios.get("/address/get_all_address_by_id/1?page=0&size=10")
}

export {fetchAllAddress};