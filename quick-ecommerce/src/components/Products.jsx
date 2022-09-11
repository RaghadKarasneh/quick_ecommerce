import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const sectionTitle = styled.h2`
    width: 100%;
    text-align: center;
`;

const Products = () => {
  const [products,bringProducts]=useState([]);
  useEffect(()=>{
    axios.get(`http://localhost/Quick_Ecommerce/quick_ecommerce/quick-ecommerce/API/bringProducts.php`)
    .then((res)=>{
      const products=res.data;
      bringProducts(products)
    });
    
   })
  return (
    <Container>
      <sectionTitle>OUR PRODUCTS</sectionTitle>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
