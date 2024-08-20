import React from 'react';
import '../assets/style.css';

const Products = () => {
    const products = [
        { id: 1, name: 'Silk Lace Wig', price: 'R250', image: '/path/to/image1.jpg' },
        { id: 2, name: 'Curly Human Hair Wig', price: 'R300', image: '/path/to/image2.jpg' },
        { id: 3, name: 'Straight Bob Wig', price: 'R180', image: '/path/to/image3.jpg' },
    ];

    return (
        <section id="products" className="products">
            <h2>Our Products</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
