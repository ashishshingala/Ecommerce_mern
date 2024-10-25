import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../reducers/productReducer';

const ProductList = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-red-500 text-center">{error}</p>;
    
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <li key={product._id} className="border p-4 rounded shadow-md">
                        <h2 className="font-semibold">{product.name}</h2>
                        <p>{product.description}</p>
                        <p className="font-bold">${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;