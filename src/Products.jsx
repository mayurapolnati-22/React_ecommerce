import React,{useContext,useState} from 'react'
import {useParams} from 'react-router-dom'
import {HelloContext} from './App';
function Products() {
    const{cart,setCart}=useContext(HelloContext)
    const[search,setSearch]=useState('');
    const[products,setProducts]=useState([
        {id:1,productName:"AC",price:50000,p_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCbI6UmBPxeTAZNAxWuLbvhdNfuyYFDB5Yw&s"},
        {id:2,productName:"Refrigerator",price:70000,p_img:"https://www.hdbfs.com/themes/custom/hdbfs/images/blog/750x350_Top-5-Refrigerators.webp"},
        {id:3,productName:"Laptop",price:100000,p_img:"https://images.unsplash.com/photo-1491472253230-a044054ca35f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"},
        {id:4,productName:"Watch",price:5000,p_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVw9shbuJ_-IXpk4OPEn1ASzb5Y1M_8yOdA&s"},
        {id:5,productName:"Washing Machine",price:40000,p_img:"https://www.ahs.com/contentassets/4055d01ab27645f8891eb174af4a9b26/hero-washermaint.png"},
    ])
    function addToCart(produce){
        setCart(previous=>[...previous,produce])
    }
    const filteredProducts=products.filter(
        (item)=>item.productName.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <>
            <h1>Products {cart.length}</h1>
            <input
            type="text"
            placeholder='Enter to search the product'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
            {
                filteredProducts.length===0?
                (<p>Product Unavailable</p>):
                (<h1>Branded Products</h1>)
            }
            {products.length===0 ? (<p>No Products Available</p>):(<>
            <div id="products">
                {
                filteredProducts.map((v)=>(
                    <div key={v.id}>
                    <li>{v.productName}</li>
                    <li>{v.price}₹</li>
                    <img src={v.p_img} width="80%"/>
                    <button onClick={()=>addToCart(v)}>Add To Cart</button>
                    </div>
                ))
            }
            </div>
            {
                cart.length===0?(<p>No item Available in cart</p>):(
                    <>
                    <h1>CART ITEMS</h1>
                    {
                        cart.map((v)=>(
                            <div key={v.id}>
                                <h1>{v.productName}</h1>
                            </div>
                        ))
                    }
                </>)
            }
            </>
            )}
            </>
)
}
export default Products