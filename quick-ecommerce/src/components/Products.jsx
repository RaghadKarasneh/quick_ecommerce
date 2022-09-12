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
      <p style={{textAlign:'center', width: '100%',display: 'block', fontSize:'40px' }}>OUR PRODUCTS</p>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
