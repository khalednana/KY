import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ProductInquiryDialog from '@/components/ProductInquiryDialog';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  usage?: string;
  varieties?: string;
  exportDates?: string;
}

export default function ProductCard({ name, description, image, usage, varieties, exportDates }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="font-body text-muted-foreground text-sm leading-relaxed mb-3">
          {description}
        </p>
        {usage && (
          <p className="font-body text-sm text-accent font-medium mb-2">
            {usage}
          </p>
        )}
        {varieties && (
          <p className="font-body text-xs text-muted-foreground mb-2">
            Varieties: {varieties}
          </p>
        )}
        {exportDates && (
          <p className="font-body text-xs text-muted-foreground mb-4">
            Export Season: {exportDates}
          </p>
        )}
        <ProductInquiryDialog productName={name} varieties={varieties}>
          <Button variant="outline" size="sm" className="w-full">
            Request Information
          </Button>
        </ProductInquiryDialog>
      </div>
    </motion.div>
  );
}
