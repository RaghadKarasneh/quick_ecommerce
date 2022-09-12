import React, { useState } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
// import "../css/post_job.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom'

function AddProduct() {

    const [isSubmit, setSubmit] = useState(false);
    const [product_name, setproductName] = useState("");
    const [image, setProductImage] = useState("");
    const [price, setProductPrice] = useState("");
    const [description, setProductDescription] = useState("");



    const productNameHandel = (e) => { setproductName(e.target.value) }
    const productImageHandel = (e) => { setProductImage(e.target.value) }
    const productPriceHandel = (e) => { setProductPrice(e.target.value) }
    const productDescHandel = (e) => { setProductDescription(e.target.value) }

    const clickHandel = () => {
        sessionStorage.getItem("user_info");
        console.log(sessionStorage.getItem("user_info"))
        /************************ */


        axios.post('http://localhost/Quick_Ecommerce/quick_ecommerce/quick-ecommerce/API/addProduct.php?product_name=' + product_name + '&image=' + image + '&price=' + price + '&description=' + description + '&is_deleted=' + 0 + '&user_id=' + sessionStorage.getItem("user_info"))
            .then((data) => {
                console.log("success!");
                setSubmit(!isSubmit)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (

        <div>
            <div className='text-center message' style={{ display: isSubmit ? "block" : "none" }}>
                <p>Your Product has been added successfully</p>
            </div>
            <div className="slider-area ">
                <div className=" section-overly slider-height2 d-flex align-items-center" data-background="assets/img/hero/about.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <p className='hero-text'>Add A New Product</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <form>
                <div className="c2">
                    <div className="cHead">
                        <h2 className='label small-section-tittle'>Enter Your Product Details:</h2>
                    </div>

                    <div className="cBody">
                        <div className="small-section-tittle">
                            <h4>Overview</h4>
                        </div>
                        <span className='d1'>
                            <label htmlFor="" className='label2'>Product Name<span className='red'>*</span></label>
                            <input type="text" className='inp' name='product_name' onChange={productNameHandel} />
                        </span>
                        <span className='d1'>
                            <label htmlFor="" className='label2'>Product Image<span className='red'>*</span></label>
                            <input type="file" className='inp' name='image' onChange={productImageHandel} />
                        </span>

                        <div>
                            <div style={{}}>
                                <span className='d1'>
                                    <label htmlFor="" className='label2'>Product Price<span className='red'>*</span></label>
                                    <input type="text" className='inp' name="price" onChange={productPriceHandel} />
                                </span>
                                <span className='d1'>
                                    <label htmlFor="" className='label2'>Product Description<span className='red'>*</span></label>
                                    <input type="text" className='inp' name="description" onChange={productDescHandel} />
                                </span>


                            </div>

                        </div>
                    </div>
                </div>


                <div style={{ width: "60%", margin: "auto", margin: "70px auto" }}>
                    <a href="#" className='butt' onClick={clickHandel}>Post Job</a>
                </div> </form>
        </div>

    );
}

export default AddProduct;