import React, { useState } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
// import "../css/post_job.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom'

function DeleteProduct() {

    const deleteuser=(Id)=>{
        axios.delete(`http://localhost/Quick_Ecommerce/quick_ecommerce/quick-ecommerce/API/deleteProduct.php?id=`+Id)
        .then(function(res){
          console.log(res.data);
          const info = res.data;
            getauction(info);
        })
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

            {/* <div className='t1'>
                <span style={{ padding: '10px' }}><FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon></span>
                Candidate Profile
                <hr />
            </div> */}
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


                    {/* <label htmlFor="">Address (1)</label> */}
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
                {/* <label htmlFor="file2" className='file'>Chose a file</label> */}
            </div> </form>
        </div>
       
    );
}

export default AddProduct;