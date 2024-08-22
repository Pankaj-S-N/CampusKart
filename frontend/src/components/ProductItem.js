import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <h2>{product.productName}</h2>
            <p>Category: {product.category}</p>
            <p>Original Price: ${product.originalPrice}</p>
            <p>Selling Price: ${product.sellingPrice}</p>
            <p>Negotiable: {product.isNegotiable ? 'Yes' : 'No'}</p>
            <p>Date of Purchase: {new Date(product.dateOfPurchase).toLocaleDateString()}</p>
            <p>Bill Available: {product.isBillAvailable ? 'Yes' : 'No'}</p>
            <p>In Warranty: {product.inWarranty ? 'Yes' : 'No'}</p>
            <p>Address: {product.address}</p>
            {product.images.length > 0 && (
                <div>
                    <h3>Images:</h3>
                    {product.images.map((image, index) => (
                        <img key={index} src={image} alt={`Product image ${index}`} className="product-image" />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductItem;
