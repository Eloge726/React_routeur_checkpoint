import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const HomePage = () => {
    return (<ul>
        <li><Link to ="/Home">Home</Link></li>
        <li><Link to = "/Category">Category</Link></li>
        <li><Link to ="/Product">Product</Link></li>
        <li><Link to ="/Adminarea">AdminArea</Link></li>
    </ul>);

}

export default HomePage;