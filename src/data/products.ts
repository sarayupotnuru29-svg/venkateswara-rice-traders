import riceImg from '@/assets/products/rice/rice-category.jpg';
import branImg from '@/assets/products/bran/bran-category.jpg';
import cattleFeedImg from '@/assets/products/cattle-feed/cattle-feed-category.jpg';
import grainsImg from '@/assets/products/grains/grains-category.jpg';
import supplementsImg from '@/assets/products/supplements/supplements-category.jpg';
import othersImg from '@/assets/products/others/others-category.jpg';

// Original Asset Imports
import bajjaraImg from '@/assets/Bajjara.jpg';
import coppraImg from '@/assets/Coppra.webp';
import cottonCakeImg from '@/assets/cotton-cake-cattle-feed.jpg';
import greenGramHuskImg from '@/assets/Green-Gram-Husk.webp';
import horseGramImg from '@/assets/Horse-Gram.jpg';
import maizeBranImg from '@/assets/maize-bran.jpg';
import maizeNukaImg from '@/assets/Maize-Nuka.webp';
import maizeImg from '@/assets/Maize.webp';
import oridDamageToorImg from '@/assets/orid-damage-toor.jpg';
import oridHuskImg from '@/assets/orid-husk.jpg';
import oridNunnaImg from '@/assets/orid-nunna.jpg';
import ragiImg from '@/assets/Ragi.jpg';
import rawRagiImg from '@/assets/Raw-Ragi.jpg';
import redGramHuskImg from '@/assets/Red-Gram-Husk.jpeg';
import riceBranPremiumImg from '@/assets/rice-bran-premium.webp';
import thoorHuskImg from '@/assets/Thoor-Husk.jpg';
import wheatBranImg from '@/assets/wheat-bran.jpg';
import wheatFlakesImg from '@/assets/wheat-flasks.jpg';
import whiteJowerImg from '@/assets/White-Jower.webp';
import yellowJowerImg from '@/assets/Yellow-Jower.png';

// New Asset Imports
import brokenRiceImg from '@/assets/BrokenRice.jpg';
import calciumImg from '@/assets/Calcium.jpg';
import cottonCakePureImg from '@/assets/CottonCakePure.jpg';
import groundNutCakeImg from '@/assets/GroundNutCake.webp';
import heritageBypassImg from '@/assets/HeritageBypassPellets.jpg';
import heritageGoldImg from '@/assets/HeritageGoldPellets.jpg';
import heritageGomitraImg from '@/assets/HeritageGomitra.webp';
import heritageGomitraPlusImg from '@/assets/HeritageGomitraPlus.jpg';
import heritageMilkBoosterImg from '@/assets/HeritageMilkBooster.jpg';
import heritageMilkJoyImg from '@/assets/HeritageMilkJoy.jpg';
import heritageMilkMagicPlusImg from '@/assets/HeritageMilkMagicPlus.jpg';
import heritageMixMawaImg from '@/assets/HeritageMixMawa.webp';
import jaggeryImg from '@/assets/Jaggery.webp';
import kurnoolRiceImg from '@/assets/KurnoolRice.webp';
import mineralMixtureImg from '@/assets/MineralMixture.jpg';
import nklMayuriImg from '@/assets/NKLMayuri.jpg';
import queenOfPunjabImg from '@/assets/QueenofPunjab.webp';
import saltImg from '@/assets/Salt.jpg';
import unityBasmatiImg from '@/assets/UnityBasmati.webp';
import vipGoldImg from '@/assets/VipGold.jpg';

export interface Product {
  id: string;
  name: string;
  quantity: string;
  price: string;
  category: string;
  image: string;
  variants?: { label: string; price: string }[];
}

const categoryImages: Record<string, string> = {
  'Brans': branImg,
  'Rice Products': riceImg,
  'Cattle Feed': cattleFeedImg,
  'Grains': grainsImg,
  'Supplements': supplementsImg,
  'Others': othersImg,
};

const productSpecificImages: Record<string, string> = {
  'Bajjara': bajjaraImg,
  'Coppra (5 types)': coppraImg,
  'Cotton Cake (Normal)': cottonCakeImg,
  'Cotton Cake (Pure)': cottonCakePureImg,
  'Green Gram Husk': greenGramHuskImg,
  'Horse Gram': horseGramImg,
  'Maize Bran': maizeBranImg,
  'Maize Nuka': maizeNukaImg,
  'Maize': maizeImg,
  'Orid Damage Toor': oridDamageToorImg,
  'Orid Husk': oridHuskImg,
  'Orid Nunna': oridNunnaImg,
  'Ragi': ragiImg,
  'Raw Ragi': rawRagiImg,
  'Red Gram Husk': redGramHuskImg,
  'Rice Bran Premium': riceBranPremiumImg,
  'Thoor Husk': thoorHuskImg,
  'Wheat Bran': wheatBranImg,
  'Wheat Flakes': wheatFlakesImg,
  'White Jower': whiteJowerImg,
  'Yellow Jower': yellowJowerImg,
  'Broken Rice': brokenRiceImg,
  'Kurnool Rice': kurnoolRiceImg,
  'Vip Gold': vipGoldImg,
  'NKL Mayuri': nklMayuriImg,
  'Queen of Punjab': queenOfPunjabImg,
  'Unity Basmati': unityBasmatiImg,
  'Heritage Bypass Pellets': heritageBypassImg,
  'Heritage Gold Pellets': heritageGoldImg,
  'Heritage Milk Magic Plus': heritageMilkMagicPlusImg,
  'Heritage Gomitra': heritageGomitraImg,
  'Heritage Gomitra Plus': heritageGomitraPlusImg,
  'Heritage Mix Mawa': heritageMixMawaImg,
  'Heritage Milk Booster': heritageMilkBoosterImg,
  'Heritage Milk Joy': heritageMilkJoyImg,
  'Ground Nut Cake': groundNutCakeImg,
  'Calcium': calciumImg,
  'Mineral Mixture': mineralMixtureImg,
  'Jaggery': jaggeryImg,
  'Salt': saltImg,
};

function makeProduct(name: string, quantity: string, price: string, category: string, variants?: { label: string; price: string }[]): Product {
  return {
    id: name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    name,
    quantity,
    price,
    category,
    image: productSpecificImages[name] || categoryImages[category] || riceImg,
    ...(variants ? { variants } : {}),
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

  // Grains — price per kg, no fixed price
  makeProduct('Maize', '50 kg', '₹19 – ₹22 / kg', 'Grains'),
  makeProduct('Bajjara', '50 kg', '₹22 – ₹28 / kg', 'Grains'),
  makeProduct('White Jower', '50 kg', '₹25 – ₹30 / kg', 'Grains'),
  makeProduct('Yellow Jower', '50 kg', '₹55 – ₹60 / kg', 'Grains'),
  makeProduct('Ragi', '50 kg', '₹43 – ₹46 / kg', 'Grains'),
  makeProduct('Raw Ragi', '50 kg', '₹42 – ₹45 / kg', 'Grains'),
  makeProduct('Horse Gram', '50 kg', '₹40 – ₹45 / kg', 'Grains'),
  makeProduct('Coppra (5 types)', '50 kg', '₹40 – ₹60 / kg', 'Grains'),

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
  makeProduct('Ground Nut Cake', '50 kg', '₹45 – ₹50 / kg', 'Cattle Feed'),

  // Rice Products
  makeProduct('Broken Rice', '50 kg', '₹1,200', 'Rice Products'),
  makeProduct('Kurnool Rice', '26 kg', '₹1,150', 'Rice Products'),
  makeProduct('Vip Gold', '26 kg', '₹1,300', 'Rice Products'),
  makeProduct('NKL Mayuri', '26 kg', '₹1,200', 'Rice Products'),
  makeProduct('Queen of Punjab', '30 kg', '', 'Rice Products'),
  makeProduct('Unity Basmati', '30 kg', '', 'Rice Products'),

  // Supplements — Calcium merged into single product with variants
  makeProduct('Calcium', '1L / 5L / 10L', '', 'Supplements', [
    { label: '1L', price: '₹150' },
    { label: '5L', price: '₹600' },
    { label: '10L', price: '₹1,100' },
  ]),
  makeProduct('Mineral Mixture', '1 kg', '₹100', 'Supplements'),

  // Others
  makeProduct('Jaggery', '50 kg', '₹50 / kg', 'Others'),
  makeProduct('Salt', '50 kg', '₹350', 'Others'),
];

export const categories = ['Brans', 'Grains', 'Cattle Feed', 'Rice Products', 'Supplements', 'Others'];
