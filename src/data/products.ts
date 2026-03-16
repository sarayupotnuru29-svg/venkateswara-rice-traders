import riceImg from '@/assets/products/rice/rice-category.jpg';
import branImg from '@/assets/products/bran/bran-category.jpg';
import cattleFeedImg from '@/assets/products/cattle-feed/cattle-feed-category.jpg';
import grainsImg from '@/assets/products/grains/grains-category.jpg';
import supplementsImg from '@/assets/products/supplements/supplements-category.jpg';
import othersImg from '@/assets/products/others/others-category.jpg';

export interface Product {
  id: string;
  name: string;
  quantity: string;
  price: string; // empty string means no price
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

function makeProduct(name: string, quantity: string, price: string, category: string): Product {
  return {
    id: name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    name,
    quantity,
    price,
    category,
    image: categoryImages[category] || riceImg,
  };
}

export const products: Product[] = [
  // Brans
  makeProduct('Rice Bran', '50 kg', '₹1,400', 'Brans'),
  makeProduct('Rice Bran Premium', '50 kg', '₹1,600', 'Brans'),
  makeProduct('Wheat Bran', '50 kg', '₹1,250', 'Brans'),
  makeProduct('Wheat Flakes', '34 kg', '₹1,000', 'Brans'),
  makeProduct('Orid Husk', '50 kg', '₹1,000', 'Brans'),
  makeProduct('Orid Nunna', '50 kg', '₹1,800', 'Brans'),
  makeProduct('Orid Damage Toor', '50 kg', '₹2,400 – ₹3,200', 'Brans'),
  makeProduct('Maize Bran', '50 kg', '₹1,250', 'Brans'),
  makeProduct('Maize Nuka', '50 kg', '₹1,200', 'Brans'),
  makeProduct('Thoor Husk', '50 kg', '₹1,250', 'Brans'),
  makeProduct('Green Gram Husk', '50 kg', '₹1,250', 'Brans'),
  makeProduct('Red Gram Husk', '50 kg', '₹1,500', 'Brans'),

  // Grains (per-kg range products: show range as quantity, no price)
  makeProduct('Maize', '19 – 22 kgs', '', 'Grains'),
  makeProduct('Bajjara', '22 – 28 kgs', '', 'Grains'),
  makeProduct('White Jower', '25 – 30 kgs', '', 'Grains'),
  makeProduct('Yellow Jower', '55 – 60 kgs', '', 'Grains'),
  makeProduct('Ragi', '43 – 46 kgs', '', 'Grains'),
  makeProduct('Raw Ragi', '42 – 45 kgs', '', 'Grains'),
  makeProduct('Horse Gram', '40 – 45 kgs', '', 'Grains'),
  makeProduct('Coppra (5 types)', '40 – 60 kgs', '', 'Grains'),

  // Cattle Feed
  makeProduct('Cotton Cake (Normal)', '50 kg', '₹1,300', 'Cattle Feed'),
  makeProduct('Cotton Cake (Pure)', '50 kg', '₹2,000', 'Cattle Feed'),
  makeProduct('Heritage Bypass Pellets', '50 kg', '₹1,000', 'Cattle Feed'),
  makeProduct('Heritage Gold Pellets', '50 kg', '₹1,100', 'Cattle Feed'),
  makeProduct('Heritage Milk Magic Plus', '50 kg', '₹1,150', 'Cattle Feed'),
  makeProduct('Heritage Gomitra', '50 kg', '₹1,300', 'Cattle Feed'),
  makeProduct('Heritage Gomitra Plus', '50 kg', '₹1,400', 'Cattle Feed'),
  makeProduct('Heritage Mix Mawa', '50 kg', '₹1,350', 'Cattle Feed'),
  makeProduct('Heritage Milk Booster', '50 kg', '₹1,400', 'Cattle Feed'),
  makeProduct('Heritage Milk Joy', '50 kg', '₹1,650', 'Cattle Feed'),
  makeProduct('Ground Nut Cake', '45 – 50 kgs', '', 'Cattle Feed'),

  // Rice Products
  makeProduct('Broken Rice', '50 kg', '₹1,200', 'Rice Products'),
  makeProduct('Kurnool Rice', '26 kg', '₹1,150', 'Rice Products'),
  makeProduct('Vip Gold', '26 kg', '₹1,300', 'Rice Products'),
  makeProduct('NKL Mayuri', '26 kg', '₹1,200', 'Rice Products'),
  makeProduct('Queen of Punjab', '30 kg', '', 'Rice Products'),
  makeProduct('Unity Basmati', '30 kg', '', 'Rice Products'),

  // Supplements
  makeProduct('Calcium (1L)', '1 L', '₹150', 'Supplements'),
  makeProduct('Calcium (5L)', '5 L', '₹600', 'Supplements'),
  makeProduct('Calcium (10L)', '10 L', '₹1,100', 'Supplements'),
  makeProduct('Mineral Mixture', '1 kg', '₹100', 'Supplements'),

  // Others
  makeProduct('Jaggery', '50 kg', '₹50/kg', 'Others'),
  makeProduct('Salt', '50 kg', '₹350', 'Others'),
];

export const categories = ['Brans', 'Grains', 'Cattle Feed', 'Rice Products', 'Supplements', 'Others'];
