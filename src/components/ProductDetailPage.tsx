import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductDetail from './ProductDetail';  // Assuming you already have this component
import { Navbarcomp } from './NavbarComp';

const ProductDetailPage: React.FC = () => {
  const location = useLocation();
  const product = location.state?.product;  // Access the product passed via state

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Navbarcomp/>
      <h1 className='text-4xl font-bold text-center tracking-[-0.02em] md:text-6xl md:leading-[5rem] text-[#171717] my-8' style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
  Explore Your Product
</h1>

      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailPage;
