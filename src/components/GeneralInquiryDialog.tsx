import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import { z } from 'zod';
import { Check } from 'lucide-react';

const AVAILABLE_PRODUCTS = [
  'Premium Potatoes',
  'Fresh Citrus Fruits',
  'Green Onions',
  'Red Onions',
  'Sweet Potatoes',
  'Garlic',
  'Grapes',
  'Pomegranates',
  'Strawberries',
  'Mangoes',
];

const inquirySchema = z.object({
  fullName: z.string().trim().min(1, 'Full name is required').max(100, 'Name must be less than 100 characters'),
  company: z.string().trim().max(100, 'Company name must be less than 100 characters').optional(),
  country: z.string().trim().min(1, 'Country is required').max(100, 'Country must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
  products: z.array(z.string()).min(1, 'Please select at least one product'),
  otherProduct: z.string().trim().max(200, 'Product name must be less than 200 characters').optional(),
  message: z.string().trim().max(1000, 'Message must be less than 1000 characters').optional(),
});

interface GeneralInquiryDialogProps {
  children: React.ReactNode;
}

export default function GeneralInquiryDialog({ children }: GeneralInquiryDialogProps) {
  const [open, setOpen] = useState(false);
  const [state, handleSubmit] = useForm("mgoyywzk");
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    country: '',
    email: '',
    products: [] as string[],
    otherProduct: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleProductToggle = (product: string) => {
    setFormData(prev => {
      const isSelected = prev.products.includes(product);
      const newProducts = isSelected
        ? prev.products.filter(p => p !== product)
        : [...prev.products, product];
      return { ...prev, products: newProducts };
    });
    if (errors.products) {
      setErrors(prev => ({ ...prev, products: '' }));
    }
  };

  const isOtherSelected = formData.products.includes('Other');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    try {
      // If "Other" is selected but no custom product provided, show error
      if (isOtherSelected && !formData.otherProduct.trim()) {
        setErrors({ otherProduct: 'Please specify your product' });
        return;
      }

      const validated = inquirySchema.parse(formData);
      
      const selectedProducts = formData.products
        .filter(p => p !== 'Other')
        .concat(formData.otherProduct ? [formData.otherProduct] : []);
      
      // Submit to Formspree
      await handleSubmit(e);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast.error('Failed to send inquiry. Please try again.');
      }
    }
  };

  // Handle success
  useEffect(() => {
    if (state.succeeded && open) {
      const selectedProducts = formData.products
        .filter(p => p !== 'Other')
        .concat(formData.otherProduct ? [formData.otherProduct] : []);
      
      toast.success('Inquiry sent successfully!', {
        description: `We'll get back to you about ${selectedProducts.join(', ')} soon.`,
      });
      
      setOpen(false);
      setFormData({
        fullName: '',
        company: '',
        country: '',
        email: '',
        products: [],
        otherProduct: '',
        message: '',
      });
    }
  }, [state.succeeded, open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Inquire Now</DialogTitle>
          <DialogDescription className="font-body">
            Tell us which products you're interested in and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={onSubmit} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className={errors.fullName ? 'border-destructive' : ''}
              required
            />
            <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
            {errors.fullName && (
              <p className="text-sm text-destructive">{errors.fullName}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
              className={errors.company ? 'border-destructive' : ''}
            />
            {errors.company && (
              <p className="text-sm text-destructive">{errors.company}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="country">Country *</Label>
            <Input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Your country"
              className={errors.country ? 'border-destructive' : ''}
              required
            />
            <ValidationError prefix="Country" field="country" errors={state.errors} />
            {errors.country && (
              <p className="text-sm text-destructive">{errors.country}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={errors.email ? 'border-destructive' : ''}
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Products of Interest *</Label>
            <ScrollArea className={`h-48 rounded-md border p-3 ${errors.products ? 'border-destructive' : 'border-border'}`}>
              <div className="space-y-2">
                {AVAILABLE_PRODUCTS.map((product) => (
                  <button
                    key={product}
                    type="button"
                    onClick={() => handleProductToggle(product)}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-left text-sm font-body transition-colors ${
                      formData.products.includes(product)
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                  >
                    {product}
                    {formData.products.includes(product) && (
                      <Check className="w-4 h-4" />
                    )}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => handleProductToggle('Other')}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-left text-sm font-body transition-colors ${
                    isOtherSelected
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  Other
                  {isOtherSelected && (
                    <Check className="w-4 h-4" />
                  )}
                </button>
              </div>
            </ScrollArea>
            {errors.products && (
              <p className="text-sm text-destructive">{errors.products}</p>
            )}
          </div>

          {isOtherSelected && (
            <div className="space-y-2">
              <Label htmlFor="otherProduct">Specify Product *</Label>
              <Input
                id="otherProduct"
                name="otherProduct"
                value={formData.otherProduct}
                onChange={handleChange}
                placeholder="Enter the product you're looking for"
                className={errors.otherProduct ? 'border-destructive' : ''}
              />
              {errors.otherProduct && (
                <p className="text-sm text-destructive">{errors.otherProduct}</p>
              )}
            </div>
          )}

          {/* Hidden field for products */}
          <input
            type="hidden"
            name="products"
            value={formData.products.filter(p => p !== 'Other').concat(formData.otherProduct ? [formData.otherProduct] : []).join(', ')}
          />
          <input type="hidden" name="inquiryType" value="General Inquiry" />
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              rows={4}
              className={errors.message ? 'border-destructive' : ''}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message}</p>
            )}
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="accent"
              className="flex-1"
              disabled={state.submitting || state.succeeded}
            >
              {state.submitting ? 'Sending...' : state.succeeded ? 'Sent!' : 'Send Inquiry'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
