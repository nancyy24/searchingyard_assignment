import "../component/products.css"
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';


function Products(){
    const [prods,setProds] = useState([]);
    useEffect(()=>{
        (async () =>{
            let res =  await axios({
                method: 'get',
                url: 'https://dummyjson.com/products',
              });
              let data = res.data;
            console.log(data.products);
            setProds(data.products);
        })();
    },[]);
    return (
        <>
        <div className="product-item col-8 " >

<div >
{prods.map((el)=>{
            return <div className="mybox my-3">

                <div>
                    <img src={el.thumbnail} className="prodimg mt-3"/>
                </div>
<hr/>
                <div className="d-flex justify-content-around">
                    <p className="fw-bold">Title</p>
                    <p className="ms-5">{el.title}</p>
                </div>
                <div className="d-flex justify-content-around">
                    <p className="fw-bold">Brand Name</p>
                    <p className="ms-5">{el.brand}</p>
                </div>
                <div className="d-flex justify-content-around">
                    <p className="fw-bold">Category</p>
                    <p className="ms-5">{el.category}</p>
                </div>
                <div className="d-flex justify-content-around">
                    <p className="fw-bold">Price</p>
                    <p className="ms-5">{el.price}</p>
                </div>
                <div className="d-flex justify-content-around">
                    <p className="fw-bold">Rating</p>
                    <p className="ms-5">{el.rating}</p>
                </div>
                <div className="d-flex justify-content-around">
                    <p className="fw-bold">Stock</p>
                    <p className="ms-5">{el.stock}</p>
                </div>



            </div>
        })}

</div>
        
        </div>
        </>
    )
}

export default Products;