import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import "../component/categories.css";

function Categories(){
    const [cats,setCats] = useState([]);
    useEffect(()=>{
        (async () =>{
            let res =  await axios({
                method: 'get',
                url: 'https://dummyjson.com/products/categories',
              });
              let data = res.data;
            setCats(data);
        })();
    },[]);
    return (
        <>
        <div className="prods col-3 me-3" >

        <p className="m-0 mt-4 mb-2 fw-bold fs-3">Categories</p>
        <div className="form-check">
        {
            cats.map((item,value) => {
                return (
                    <div >
                    <input type="checkbox" className="form-check-input" value={value}

                  />
                <label className="form-check-label text-black fw-bold me-0" 
                >{item}</label>
                </div>
                )
            })
        }
               
         </div>

        </div>
        {/* {cats.map((el)=>{
            return <div>{el}</div>
        })} */}
        </>
    )
}

export default Categories;