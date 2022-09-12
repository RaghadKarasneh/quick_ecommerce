import React, { Component } from "react";
import styled from "styled-components";
import axios from 'axios';
import { mobile } from "../responsive";
import {  Link } from 'react-router-dom';
// import "./reg.css";

const regExp = RegExp(
  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const passRegex = RegExp(
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
)
const Container = styled.div`
  width: 100vw;
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
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
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
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;


const formValid = ({ isError, ...rest }) => {
  let isValid = true;

  Object.values(rest).forEach(val => {
    if (val === '') {
      isValid = false
    }
  });

  Object.values(isError).forEach(val => {
    if (val.length > 0) {
      isValid = false
    }
  });

  return isValid;
};

export default class UserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      isError: {
        name: '',
        email: '',
        password: '',
      }
    }
  }


  onSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log("form Valid");
      let user_name = this.state.name
      let email = this.state.email
      let password = this.state.password



      axios.post('http://localhost/Quick_Ecommerce/quick_ecommerce/quick-ecommerce/API/register.php?name=' + user_name + '&email=' + email + '&password=' + password);

      window.location.href = "/Login";


    } else {
      console.log("Form is invalid!");

    }
  };

  formValChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
      case "name":
        isError.name =
          value.length < 4 ? "Atleast 4 characaters required" : "";
        break;

      case "email":
        isError.email = regExp.test(value)
          ? ""
          : "Email address is invalid";
        break;

      case "password":
        isError.password = passRegex.test(value)
          ? ""
          : "Minimum eight characters, at least one letter and one number";
        break;

      default:
        break;

    }
    this.setState({
      isError,
      [name]: value
    })
  };

  render() {
    console.log("hello regester");
    const { isError } = this.state;

    return (
      <Container>
        <Wrapper>
          <Title>SIGN UP</Title>
          <Form className="d" onSubmit={this.onSubmit} noValidate>
            <Input type="text" className={isError.name.length > 0 ? "is-invalid form-control regForm" : "form-control regForm"}
              name="name"
              onChange={this.formValChange} placeholder="username" />
            {isError.name.length > 0 && (
              <span className="invalid-feedback">{isError.name}</span>
            )}
            <Input type="email" className={isError.email.length > 0 ? "is-invalid form-control regForm" : "form-control regForm"}
              name="email"
              onChange={this.formValChange} placeholder="email" />
            {isError.email.length > 0 && (
              <span className="invalid-feedback">{isError.email}</span>
            )}
            <Input type="password" className={isError.password.length > 0 ? "is-invalid form-control regForm" : "form-control regForm"}
              name="password"
              onChange={this.formValChange} placeholder="password" />
            {isError.password.length > 0 && (
              <span className="invalid-feedback">{isError.password}</span>
            )}
            <Button type="submit" className="btn " id="regBtn">LOGIN</Button>
            <Link to="/Login">Already have an account?</Link>

          </Form>
        </Wrapper>
      </Container>






    );
  }
}