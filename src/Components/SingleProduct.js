import React from 'react';
const SingleProduct = (props) => {
    const produit=props.prod.find(el=>el.id===Number(props.match.params.productId))
    console.log(props.match.params.productId)
    return ( <>
    <h1>{produit.name}</h1>
    <p>{produit.description}</p>
    <h3>{produit.status}</h3>
    </> );
}
 
export default SingleProduct;