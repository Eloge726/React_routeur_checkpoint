import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
const Category = ({match}) => {
    return ( <ul>
        <li><Link to={`${match.url}/Shoes`}>Shoes</Link></li>
        <li><Link to={`${match.url}/Boots`}>Boots</Link></li>
        <li><Link to={`${match.url}/Footswear`}>Footswear</Link></li>
        <Route path = {`${match.path}/Shoes`} render={()=><h1>Shoes</h1>}/>
        <Route path = {`${match.path}/Boots`} render={()=><h1>Boots</h1>}/>
        <Route path = {`${match.path}/Footswear`} render={()=><h1>Footswear</h1>}/>
    </ul>  );
}
 
export default Category;