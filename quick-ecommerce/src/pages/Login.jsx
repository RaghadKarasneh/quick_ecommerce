import React, { Component } from "react";
import axios from 'axios';
import styled from "styled-components";
import {mobile} from "../responsive";
import {  Link } from 'react-router-dom';
const regExp = RegExp(
  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

const formValid = ({ isError, ...rest }) => {
  let isValid = false;

  Object.values(isError).forEach(val => {
      if (val.length > 0) {
          isValid = false
      } else {
          isValid = true
      }
  });

  Object.values(rest).forEach(val => {
      if (val === null) {
          isValid = false
      } else {
          isValid = true
      }
  });

  return isValid;
};
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

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
        email: '',
        password: '',
        isError: {
           
            error: false,
            password: ''
        },
    }
}


onSubmit = e => {
    e.preventDefault();
    let email=this.state.email
    let password=this.state.password
    axios.get('http://localhost/Quick_Ecommerce/quick_ecommerce/quick-ecommerce/API/login.php').then(res => {

                    console.log(res.data);
                    // if(res.data){
                        console.log(res.data);
                        sessionStorage.setItem("user_id", res.data);
                        let id= sessionStorage.getItem("user_id");
                        console.log("heh"+id);


if(id > 0){
        window.location.href = "/";


    }else{
        this.setState({isError:{error:true}});
        
    }

                  
                  })
};
formValChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = { ...this.state.isError };


    this.setState({
        isError,
        [name]: value
    })
};

render() {
    const { isError } = this.state;

    return (
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form className="d" onSubmit={this.onSubmit} noValidate>
            <Input  type="email"
                        className={isError.error ? "is-invalid form-control regForm" : "form-control regForm"}
                        name="email"
                        onChange={this.formValChange} placeholder="Email"/>
            {isError.error  && (
                        <span className="invalid-feedback">email or password is wrong</span>
                    )}
            <Input type="password"
                        className= "form-control regForm"
                        name="password"
                        onChange={this.formValChange} placeholder="password" />
   
            <Button type="submit" className="btn " id="regBtn">LOGIN</Button>
            <Link to="/Register">Don't have an account?</Link>

          </Form>
        </Wrapper>
      </Container>






    );
  }
}