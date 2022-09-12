
import React, { Component } from "react";
import styled from "styled-components";
import axios from 'axios';
import { mobile } from "../responsive";
import Table from 'react-bootstrap/Table';
import { Add, Delete, Edit } from "@material-ui/icons";
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import "./reg.css";

const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const passRegex = RegExp(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
)
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
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Title = styled.h3`
  font-size: 24px;
  font-weight: 300;
  margin-top: 50px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
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
const Image = styled.img`
  height: 75%;
  z-index: 2;
  border-radius:50%;
  text-align: center
`;
const Text = styled.p`
  font-size:15px
`;
const Profile = () => {
    return (
        <Container>
            <Wrapper>
                <Image src="https://randomuser.me/api/portraits/men/64.jpg" />
                <Name>Raghad</Name>
                <Title>Your Products</Title>
                <Button variant="success"> <Add /></Button>{' '}
                <Table striped bordered hover style={{ width: '100%' }}>
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
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>

                                <Edit style={{ color: 'blue' }}/>
                                <Delete style={{ color: 'red' }}/>

                            </td>
                        </tr>

                    </tbody>

                </Table>
            </Wrapper>
        </Container>






    );
}
export default Profile;