import React from 'react';
import { Link, Route } from 'react-router-dom';
import SingleProduct from './SingleProduct';
const Product = (props) => {
    const product = [{
        id:1,
        name: 'Nike Lite Force Blue Sneakers',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
        status:"Available",

    },{
        id:2,
        name: 'U.S. POLO ASSN. Slippers',
        description: "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
        status:"Available",
    }]
    return ( <>
    <div>
    {product.map(el=><p><Link to ={`${props.match.url}/${el.id}`}>{el.name}</Link></p>)}
    </div>
    <Route path={`${props.match.path}/:productId`} render={(props)=><SingleProduct prod={product} {...props}/>}/>
    </> );
}
 
export default Product;