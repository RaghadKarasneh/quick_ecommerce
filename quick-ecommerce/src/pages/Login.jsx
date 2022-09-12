import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from "../action/login";

function Login() {
    // let path = sessionStorage.getItem("user_path");
    const dispatch = useDispatch();
    const user = useSelector(state => state.login.user);
    const error = useSelector(state => state.login.error);

    if (user !== '') {
      // console.log(user,'RAGHAD');
      // const x=user;
      //  console.log(x,'x');
        sessionStorage.setItem("user_info", JSON.stringify(user[0].id));
        const y=sessionStorage.getItem("user_info");
        console.log(sessionStorage.getItem("user_info"),'RAGHAD');
        // if (path){
            window.location.href = "/"
        // }else{
            // window.location.href = "/";
        // }
        
    }else{
      console.log('error')
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            {/* Page Header Start */}
            <div
                className="container-fluid page-header py-3  wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">Login</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item">
                                <a className="text-white" href="/">
                                    Home
                                </a>
                            </li>
                            <li
                                className="breadcrumb-item text-primary active"
                                aria-current="page"
                            >
                                Login
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* /////////////////////////////////////////// */}
            <section className="vh-75" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100 "><br />
                    <div className="row d-flex justify-content-center align-items-center h-50 "><br />
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body ">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Login
                                            </p>
                                            <form className="mx-1 mx-md-4" onSubmit={(e) => e.preventDefault()}>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw text-dark" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label text-dark" htmlFor="form3Example3c">
                                                            Your Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="form3Example3c"
                                                            className="form-control text-dark"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw text-dark" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label text-dark" htmlFor="form3Example4c">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="form3Example4c"
                                                            className="form-control text-dark"
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            required
                                                        /><span className='err'>{error}</span>
                                                    </div>
                                                </div>
                                                <div className="form-check d-flex justify-content-center ">

                                                    <p className="form-check-label text-dark" htmlFor="form2Example3">
                                                        Don't have an account ?{" "}
                                                        <a href="/register"><strong>Register</strong></a>
                                                    </p>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" defaultValue="Sign up" className="btn btn-primary btn-lg" onClick={() => dispatch(login(email, password))}>
                                                        Login
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-7 col-lg-4 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="https://media.istockphoto.com/photos/gavel-on-auction-word-picture-id917901978?k=20&m=917901978&s=612x612&w=0&h=NULGu8-bVpy28gbW6AZbZlEVra-Q4s2rg607emPfkCs="
                                                className="img-fluid"
                                                alt="Sample image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </section>

        </>
    );
}
export default Login;