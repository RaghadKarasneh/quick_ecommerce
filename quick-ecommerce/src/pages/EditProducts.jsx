
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
// import './addAuc.css';

function EditProducts() {
    const Id = sessionStorage.getItem('Id');
    const product_name = sessionStorage.getItem('product_name');
    const image = sessionStorage.getItem('image');
    const price = sessionStorage.getItem('price');
    const description = sessionStorage.getItem('description');


    const [isSubmit, setSubmit] = useState([]);
    const [productName, setproductName] = useState(product_name);
    const [productImage, setproductImage] = useState(image);
    const [productDescription, setproductDescription] = useState(description);
    const [productPrice, setproductPrice] = useState(price);


    // const [input, setInputs] = useState([]);


    const productNameHandel = (e) => { setproductName(e.target.value) }
    const productImageHandel = (e) => { setproductImage(e.target.value) }
    const productPriceHandel = (e) => { setproductPrice(e.target.value) }
    const productDescriptionHandel = (e) => { setproductDescription(e.target.value) }

    // const {postId}=useParams();
    useEffect(() => {
        // getauction();
    }, [Id, productName, productImage, productPrice, productDescription]);
    // }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost/Quick_Ecommerce/quick_ecommerce/quick-ecommerce/API/editProduct.php?id=' + Id + '&product_name=' + productName + '&image=' + productImage + '&price=' + productPrice + '&description=' + productDescription)

            .then((data) => {
                console.log("success!");
                setSubmit(!isSubmit)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <>


            <section className='ad-sec ad-sec-edit'>

                <article className='ad-artic'>
                    <br />
                    <div class="alert alert-success" role="alert" style={{ display: isSubmit ? "none" : "block" }}>
                        Edit successfully!
                    </div>

                    <div className="container" style={{width: '30%',  backgroundColor: '#ecefef', padding: '40px', marginBottom:'50px'}}>
                        <div className="title">
                            <h4> Edit Product Information </h4>
                        </div>
                        <div className="d-flex">
                            <form action="" method="" className='formm' onSubmit={handleSubmit} enctype="multipart/form-data">
                                <span className="name">Product Name <span className="required" >*</span></span>
                                <input type="text" name="product_name" required onChange={productNameHandel} defaultValue={product_name} style={{display:'block', marginBottom:'20px'}}/>


                                <span className="des">Product Image <span className="required" >*</span></span>
                                <input type="file" name="image" required onChange={productImageHandel} defaultValue={image} style={{display:'block', marginBottom:'20px'}}/>

                                <span>Product Price <span className="required">*</span></span>
                                <input type="number" id="img" name="price" className='img' required onChange={productPriceHandel} defaultValue={price} style={{display:'block', marginBottom:'20px'}}/>

                                <span>	Product Description <span className="required">*</span></span>
                                <textarea type="text" name="description" required onChange={productDescriptionHandel} defaultValue={description} style={{display:'block', marginBottom:'20px'}}/>




                                <button type="submit" style={{backgroundColor: 'teal', color:'#fff', padding:'10px'}}>Confirm edit </button>
                            </form>
                        </div>
                    </div>

                </article>
            </section>

        </>

    );

}
export default EditProducts;