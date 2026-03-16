import riceImg from '@/assets/products/rice/rice-category.jpg';
import branImg from '@/assets/products/bran/bran-category.jpg';
import cattleFeedImg from '@/assets/products/cattle-feed/cattle-feed-category.jpg';
import grainsImg from '@/assets/products/grains/grains-category.jpg';
import supplementsImg from '@/assets/products/supplements/supplements-category.jpg';
import othersImg from '@/assets/products/others/others-category.jpg';

export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
}

const categoryImages: Record<string, string> = {
  'Brans': branImg,
  'Rice Products': riceImg,
  'Cattle Feed': cattleFeedImg,
  'Grains': grainsImg,
  'Supplements': supplementsImg,
  'Others': othersImg,
};

function makeProduct(name: string, price: string, category: string): Product {
  return {
    id: name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    name,
    price,
    category,
    image: categoryImages[category] || riceImg,
  };
}

export const products: Product[] = [
  // Brans
  makeProduct('Rice Bran', '₹1,400', 'Brans'),
  makeProduct('Rice Bran Premium', '₹1,600', 'Brans'),
  makeProduct('Wheat Bran', '₹1,250', 'Brans'),
  makeProduct('Wheat Flakes (34kg)', '₹1,000', 'Brans'),
  makeProduct('Orid Husk', '₹1,000', 'Brans'),
  makeProduct('Orid Nunna', '₹1,800', 'Brans'),
  makeProduct('Orid Damage Toor', '₹2,400 – ₹3,200', 'Brans'),
  makeProduct('Maize Bran', '₹1,250', 'Brans'),
  makeProduct('Maize Nuka', '₹1,200', 'Brans'),
  makeProduct('Thoor Husk', '₹1,250', 'Brans'),
  makeProduct('Green Gram Husk', '₹1,250', 'Brans'),
  makeProduct('Red Gram Husk', '₹1,500', 'Brans'),

  // Grains
  makeProduct('Maize', '₹19 – ₹22/kg', 'Grains'),
  makeProduct('Bajjara', '₹22 – ₹28/kg', 'Grains'),
  makeProduct('White Jower', '₹25 – ₹30/kg', 'Grains'),
  makeProduct('Yellow Jower', '₹55 – ₹60/kg', 'Grains'),
  makeProduct('Ragi', '₹43 – ₹46/kg', 'Grains'),
  makeProduct('Raw Ragi', '₹42 – ₹45/kg', 'Grains'),
  makeProduct('Horse Gram', '₹40 – ₹45/kg', 'Grains'),
  makeProduct('Coppra (5 types)', '₹40 – ₹60/kg', 'Grains'),

  // Cattle Feed
  makeProduct('Cotton Cake (Normal)', '₹1,300', 'Cattle Feed'),
  makeProduct('Cotton Cake (Pure)', '₹2,000', 'Cattle Feed'),
  makeProduct('Heritage Bypass Pellets', '₹1,000', 'Cattle Feed'),
  makeProduct('Heritage Gold Pellets', '₹1,100', 'Cattle Feed'),
  makeProduct('Heritage Milk Magic Plus', '₹1,150', 'Cattle Feed'),
  makeProduct('Heritage Gomitra', '₹1,300', 'Cattle Feed'),
  makeProduct('Heritage Gomitra Plus', '₹1,400', 'Cattle Feed'),
  makeProduct('Heritage Mix Mawa', '₹1,350', 'Cattle Feed'),
  makeProduct('Heritage Milk Booster', '₹1,400', 'Cattle Feed'),
  makeProduct('Heritage Milk Joy', '₹1,650', 'Cattle Feed'),
  makeProduct('Ground Nut Cake', '₹45 – ₹50/kg', 'Cattle Feed'),

  // Rice Products
  makeProduct('Broken Rice', '₹1,200', 'Rice Products'),
  makeProduct('Kurnool Rice (26kg)', '₹1,150', 'Rice Products'),
  makeProduct('Vip Gold (26kg)', '₹1,300', 'Rice Products'),
  makeProduct('NKL Mayuri (26kg)', '₹1,200', 'Rice Products'),
  makeProduct('Queen of Punjab (30kg)', 'Contact for Price', 'Rice Products'),
  makeProduct('Unity Basmati (30kg)', 'Contact for Price', 'Rice Products'),

  // Supplements
  makeProduct('Calcium (1L)', '₹150', 'Supplements'),
  makeProduct('Calcium (5L)', '₹600', 'Supplements'),
  makeProduct('Calcium (10L)', '₹1,100', 'Supplements'),
  makeProduct('Mineral Mixture (1kg)', '₹100', 'Supplements'),

  // Others
  makeProduct('Jaggery', '₹50/kg', 'Others'),
  makeProduct('Salt (50kg)', '₹350', 'Others'),
];

export const categories = ['Brans', 'Grains', 'Cattle Feed', 'Rice Products', 'Supplements', 'Others'];
