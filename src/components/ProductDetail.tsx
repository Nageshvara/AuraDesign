import React, { useState,useEffect } from 'react';
import { FooterComp } from './FooterComp';

interface Product {
  id: number;
  title: string;
  imgSrc: string;
  price?: number;
  description: string;
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [pincode, setPincode] = useState<string>('');

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPincode(e.target.value);
  };

  const addToCart = () => {
    console.log(`${product.title} added to cart with quantity: ${quantity}`);
    // Logic to add the product to the cart
  };

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const buyNow = () => {
    console.log(`Buying ${product.title} with quantity: ${quantity}`);
    // Logic to proceed with buying the product
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between p-8 bg-white shadow-lg rounded-lg max-w-5xl mx-auto mt-8 mb-12" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
        <div className="md:w-1/2 flex justify-center">
          <img src={product.imgSrc} alt={product.title} className="w-full h-auto rounded-md" />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 flex flex-col">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-2xl text-gray-700 mb-4">₹{product.price}</p>
          
          <div className="mb-4">
            <label htmlFor="quantity" className="text-lg font-semibold">Quantity:</label>
            <select
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="ml-4 border border-gray-300 rounded-md p-2"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="pincode" className="text-lg font-semibold">Enter Pincode for Delivery:</label>
            <input
              type="text"
              id="pincode"
              value={pincode}
              onChange={handlePincodeChange}
              placeholder="Enter your pincode"
              className="ml-4 border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex space-x-4 mt-6">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-semibold transition duration-300 ease-in-out"
              onClick={addToCart}
            >
              Add to Cart
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md font-semibold transition duration-300 ease-in-out"
              onClick={buyNow}
            >
              Buy Now
            </button>
          </div>
          <h3 className="text-xl font-bold md:text-3xl mt-8" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
            Product Info
          </h3>
          <p className='text-lg md:text-xl text-[#171717] py-4' style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
            {product.description}
          </p>
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default ProductDetail;
