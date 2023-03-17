interface Rating{
    rate:number,
    count:number,
}


interface IProps{
    id:number,
   title:string,
   price:number,
   description:string,
   category:string,
   image:string,
   rating:Rating;

}



const Product = (props:IProps)=>{
    const {id,title,price,description,category,image,rating}=props
    const product = props;
   
   
    return <section>
            <article>
                <img style={{maxWidth:"10%"}} src={image} alt=""/>
            </article>

            <article>
                <div>
                    <h2>{title}</h2>
                </div>
            </article>

            <article>
                <div>
                    <h2> {price}€</h2>
                    <span>Rating: {rating.rate}/5</span>
                </div>
            </article>
            <p>{description}</p>
        </section>
}
export {Product};