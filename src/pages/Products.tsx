import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import AnimatedText from '@/components/AnimatedText';

// Import product images
import productPotatoes from '@/assets/products/productPotates.jpeg';
import productCarrots from '@/assets/products/productCarrots.jpeg';
import productGarlic from '@/assets/products/productGarlic.jpeg';
import productGrapefruit from '@/assets/products/productGrapefruit.jpeg';
import productGrapes from '@/assets/products/productGrapes.jpeg';
import productLemon from '@/assets/products/productLemon.jpeg';
import productMandarinMerav from '@/assets/products/prodactMandarin(Merav).jpeg';
import productMandarinGoldenNugget from '@/assets/products/productMandarin(Golden_Nugget).jpeg';
import productMandarinMurcott from '@/assets/products/productMandarin(Murcott).jpeg';
import productOrangesNavel from '@/assets/products/productOranges(Navel).jpeg';
import productOrangesValencia from '@/assets/products/productOranges(Valencia).jpeg';
import productPeanuts from '@/assets/products/productPeanuts.jpeg';
import productPomegranate from '@/assets/products/productPomegranate.jpeg';
import productStrawberry from '@/assets/products/productStrawberry.jpeg';
import productSweetPotatoes from '@/assets/products/productSweetPotatoes.jpeg';
import productGreenOnions from '@/assets/products/productsGreenOnions.jpeg';

const products = [
  {
    name: 'Premium Potatoes',
    description: 'High-quality Egyptian potatoes, carefully selected and graded for export markets.',
    image: productPotatoes,
    usage: 'Fresh consumption & Processing',
    varieties: 'Cara, Spunta, Diamant, Colomba, Hermes, Lady Rosetta',
    exportDates: 'End of Jan - Mid-Jun 2026',
  },
  {
    name: 'Carrots',
    description: 'Fresh, crisp carrots with vibrant orange color, rich in beta-carotene and perfect for export markets.',
    image: productCarrots,
    usage: 'Fresh consumption & Processing',
  },
  {
    name: 'Garlic',
    description: 'Premium Egyptian garlic with strong flavor and aroma, carefully cured and packed for export.',
    image: productGarlic,
    usage: 'Culinary & Export',
    exportDates: 'Beginning of Mar - Mid-Apr 2026',
  },
  {
    name: 'Grapefruit',
    description: 'Fresh, tangy grapefruits with perfect balance of sweetness and acidity, ideal for fresh consumption.',
    image: productGrapefruit,
    usage: 'Fresh market & Juice production',
  },
  {
    name: 'Grapes',
    description: 'Sweet, juicy grapes from Egypt\'s vineyards, available in multiple varieties for fresh consumption.',
    image: productGrapes,
    usage: 'Fresh market & Export',
    exportDates: 'Beginning of May - End of Jun 2026',
  },
  {
    name: 'Lemons',
    description: 'Fresh, zesty lemons with high juice content, perfect for culinary use and juice production.',
    image: productLemon,
    usage: 'Culinary & Juice production',
  },
  {
    name: 'Mandarin (Merav)',
    description: 'Sweet and seedless Merav mandarins, easy to peel and perfect for fresh consumption.',
    image: productMandarinMerav,
    usage: 'Fresh market & Export',
    exportDates: 'Beginning of Jan - Mid-May 2026',
  },
  {
    name: 'Mandarin (Golden Nugget)',
    description: 'Premium Golden Nugget mandarins with exceptional sweetness and rich flavor.',
    image: productMandarinGoldenNugget,
    usage: 'Fresh market & Export',
    exportDates: 'Beginning of Jan - Mid-May 2026',
  },
  {
    name: 'Mandarin (Murcott)',
    description: 'Delicious Murcott mandarins with perfect balance of sweetness and tanginess.',
    image: productMandarinMurcott,
    usage: 'Fresh market & Export',
    exportDates: 'Beginning of Jan - Mid-May 2026',
  },
  {
    name: 'Oranges (Navel)',
    description: 'Premium Navel oranges, seedless and easy to peel, perfect for fresh consumption.',
    image: productOrangesNavel,
    usage: 'Fresh market & Juice production',
    exportDates: 'Beginning of Jan - Mid-May 2026',
  },
  {
    name: 'Oranges (Valencia)',
    description: 'Juicy Valencia oranges with high juice content, ideal for both fresh consumption and juice production.',
    image: productOrangesValencia,
    usage: 'Fresh market & Juice production',
    exportDates: 'Beginning of Jan - Mid-May 2026',
  },
  {
    name: 'Peanuts',
    description: 'Premium quality peanuts, carefully shelled and packed for export markets.',
    image: productPeanuts,
    usage: 'Snacking & Processing',
  },
  {
    name: 'Pomegranates',
    description: 'Ruby-red pomegranates with exceptional flavor, hand-selected for premium quality and export.',
    image: productPomegranate,
    usage: 'Fresh market & Juice production',
  },
  {
    name: 'Strawberries',
    description: 'Fresh, sweet strawberries grown in optimal conditions, carefully packed to maintain freshness.',
    image: productStrawberry,
    usage: 'Fresh market & Export',
  },
  {
    name: 'Sweet Potatoes',
    description: 'Naturally sweet and nutritious sweet potatoes, rich in vitamins and perfect for diverse markets.',
    image: productSweetPotatoes,
    usage: 'Fresh consumption & Processing',
  },
  {
    name: 'Green Onions',
    description: 'Fresh spring onions grown in fertile Nile Delta soil, packed for freshness.',
    image: productGreenOnions,
    usage: 'Culinary & Export',
    exportDates: 'End of Feb - End of Apr 2026',
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Products Section */}
      <section className="section-padding pt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedText
              tag="span"
              className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Our Products
            </AnimatedText>
            <AnimatedText
              tag="h1"
              delay={0.1}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Premium Egyptian Produce
            </AnimatedText>
            <AnimatedText delay={0.2} className="font-body text-muted-foreground leading-relaxed">
              We export carefully selected agricultural products that meet the highest 
              international standards for quality, freshness, and food safety.
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.name}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
