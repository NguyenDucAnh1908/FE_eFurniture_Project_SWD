import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const ViewProductDetail = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    if (product && product.attributes) {
      const { attributes } = product;
    }
  }, [product]);

  useEffect(() => {
    fetchProductDetail();
  }, [productId]);
  const fetchProductDetail = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/products/${productId}`);
        setProduct(response.data);
        console.log("Check product detail: ", response.data);
    } catch (error) {
        console.error('Error fetching product detail:', error);
    }
};
  return {
    product
  }
}

export default ViewProductDetail
