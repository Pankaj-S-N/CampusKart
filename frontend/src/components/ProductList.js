import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div>
            <h1>All Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <ProductItem product={product} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
