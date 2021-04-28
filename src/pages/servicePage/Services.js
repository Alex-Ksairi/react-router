import { ProductCard } from "../../components/component/ProductCard";


export default function Services(props) {
    return (
        <div className='pages'>
            <h1>Welcome to the landing page of services!</h1>
            {props.productsData.map((products, index) => (
                <ProductCard key={index} products={products}/>
            ))}
            
        </div>
    )
}
