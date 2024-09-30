import React from 'react';
import './Moveupcards.css';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  imgSrc: string;
  price?: number;
  description: string; // Add description for each product
}


const Moveupcards: React.FC = () => {
  const cardData: Product[] = [
    { id: 1, title: 'Setting Spray', imgSrc: '/assets/image2.png', price: 499, description: 'Crafted with a non-greasy, lightweight formula, our setting spray ensures a smooth finish that locks in your makeup for long-lasting wear. Made with skin-friendly ingredients for all-day comfort.' },
    { id: 2, title: 'Mascara', imgSrc: '/assets/image3.png', price: 349, description: 'Formulated with premium, lash-strengthening fibers, our mascara gives your lashes an instant lift and intense volume. Waterproof and smudge-proof, made to withstand all conditions.' },
    { id: 3, title: 'Concealer', imgSrc: '/assets/image4.png', price: 399, description: 'Our concealer boasts a creamy, blendable texture, enriched with hydrating agents to cover imperfections while nourishing your skin. Its smooth, full-coverage formula offers a flawless finish.' },
    { id: 4, title: 'Highlighter', imgSrc: '/assets/image5.png', price: 599, description: 'Designed with ultra-fine, light-reflecting pigments, this highlighter offers a radiant, shimmering glow. Made with high-quality, skin-safe ingredients that enhance your natural beauty.' },
    { id: 5, title: 'Perfume', imgSrc: '/assets/Rectangle 3.png', price: 999, description: 'Our perfume features a high concentration of premium oils, blended to create a captivating, long-lasting fragrance. Carefully crafted with a delicate balance of floral and musk notes.' },
    { id: 6, title: 'Lipstick', imgSrc: '/assets/Rectangle 5.png', price: 299, description: 'This lipstick is made with moisturizing ingredients and richly pigmented color for bold, long-lasting wear. The soft texture glides on smoothly, providing comfortable, full-coverage color.' },
    { id: 7, title: 'Tools', imgSrc: '/assets/Rectangle 6.png', price: 199, description: 'Our professional beauty tools are designed from high-grade materials, ensuring durability and precision in every application. Ideal for both beginners and makeup artists.' },
    { id: 8, title: 'Eye Liner', imgSrc: '/assets/Rectangle 7.png', price: 249, description: 'Our eyeliner is crafted with a highly-pigmented, smudge-proof formula that stays put for hours. It glides on smoothly for easy application, perfect for creating sharp, defined lines.' },
  ];
  

  const navigate = useNavigate();

  const handleShopNowClick = (product: Product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="container">
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <div className="box">
            <img src={card.imgSrc} alt={card.title} className="card-image" />
            <h3 className="text-xl font-bold my-4" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
              {card.title}
            </h3>
            <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
              onClick={() => handleShopNowClick(card)}
            >
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Moveupcards;
