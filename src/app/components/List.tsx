import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { addToCart, fetchProducts } from "../../features/productSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Product } from "./Product";

const List = ()=>{

    const products = useAppSelector((state)=> state.products.products);
   
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch])
   
    console.log("products", products);



    return (
    <div>
        <h2>List will be here</h2>
        {
        products.map((product)=>{
            return(
                <Container key={product.id}>
                         <Product {...product}/>
                         <Button onClick={()=>dispatch(addToCart(product))}>Add to cart</Button>
                     </Container>
                );

        } ) }
            
 </div>
    )
    }
export {List};