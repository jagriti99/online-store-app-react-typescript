import { useAppSelector } from "../hooks";
import { Product } from "./Product";

const Cart = ()=>{

    const cartItems = useAppSelector((state)=>state.products.cart)
    console.log("cartItems:",cartItems)

    return <div>Cart is here

        {cartItems.map((item)=>{
            return(
                <Product key={item.id} {...item}/>
               
            )
        })}
    </div>
}
export {Cart};