import { useEffect } from "react";
import {useAuthContext} from "../context/AuthContext"
import ProductList from '../components/ProductList';


//components


const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <ProductList />
        </div>
    );
};

export default Home