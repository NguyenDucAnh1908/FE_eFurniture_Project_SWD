import axios from '../customize-axios';

const fetchAllCoupons = () => {
    return axios.get("/coupons");
}

export {fetchAllCoupons};