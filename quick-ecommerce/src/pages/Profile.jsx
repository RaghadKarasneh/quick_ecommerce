
import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { mobile } from "../responsive";
import Table from 'react-bootstrap/Table';
import { Add, Delete, Edit } from "@material-ui/icons";
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import "./reg.css";


const Container = styled.div`
  width: 99vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;


const Title = styled.h3`
  font-size: 24px;
  font-weight: 300;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 20%;
  border: none;
  padding: 5px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
  float:right;
`;
const Text = styled.p`
  font-size:15px
`;
const Profile = () => {
    const [userItems, bringUserItems] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost/Quick_Ecommerce/quick_ecommerce/quick-ecommerce/API/bringUserProducts.php/?user_id=1`)
            .then((res) => {

                const items = res.data;
                bringUserItems(items);

            });
    });

    const deleteProduct = (Id) => {
        axios.delete(`http://localhost/Quick_Ecommerce/quick_ecommerce/quick-ecommerce/API/deleteProduct.php?id=` + Id)
            .then(function (res) {
                console.log(res.data);
                const info = res.data;

            })
    }
    return (
        <Container>
            <Wrapper>
                <Title>Your Products</Title>
                <Button variant="success" >
                    <Link to="/Add-Product"><Add style={{color: '#fff'}}/></Link> </Button>
                <Table striped bordered hover style={{ width: '100%', textAlign: 'center' }}>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userItems.map((item) => (
                            <tr key={item.id}>
                                <td >{item.id}</td>
                                <td>{item.product_name}</td>
                                <td>{item.image}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button className="btn ml-5" style={{ backgroundColor: 'transparent', }} onClick={(e) => {
                                        e.preventDefault();
                                        sessionStorage.setItem('Id', item.id);
                                        sessionStorage.setItem('product_name', item.product_name);
                                        sessionStorage.setItem('img', item.image);
                                        sessionStorage.setItem('description', item.description);
                                        sessionStorage.setItem('price', item.price);

                                        window.location = `/EditProducts/${item.id}/edit`
                                    }}><Edit style={{ color: 'blue' }} /></button>

                                    <Delete style={{ color: 'red', cursor: 'pointer' }} onClick={() => deleteProduct(item.id)} />

                                </td>
                            </tr>
                        ))};


                    </tbody>

                </Table>
            </Wrapper>
        </Container>






    );
}
export default Profile;