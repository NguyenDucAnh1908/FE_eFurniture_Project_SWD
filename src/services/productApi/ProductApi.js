//import axios from 'axios';
import axios from '../customize-axios'

const fetchallProduct = () => {
    return axios.get("/products/get_all");
}

const fetchallProductByCategory = (categoryId) => {
    return axios.get(`/products?page=0&limit=2&categoryIds=${categoryId}`);
}

const fetchallProductByTag = () => {
    return axios.get("/products?page=0&limit=2&tagsProductIds=1");
}

const fetchallProductByBrand = () => {
    return axios.get("/products/get_all");
}

const fetchallProductByTop5BestSelling = () => {
    return axios.get("/products/top5-best-selling");
}

const fetchallProductByTop5Rating = () => {
    return axios.get("/products/top-5-products-best-rating");
}


export {fetchallProduct, fetchallProductByTop5BestSelling, fetchallProductByTop5Rating};