import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { z } from 'zod';

const inquirySchema = z.object({
  fullName: z.string().trim().min(1, 'Full name is required').max(100, 'Name must be less than 100 characters'),
  company: z.string().trim().max(100, 'Company name must be less than 100 characters').optional(),
  country: z.string().trim().min(1, 'Country is required').max(100, 'Country must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
  message: z.string().trim().max(1000, 'Message must be less than 1000 characters').optional(),
});

interface ProductInquiryDialogProps {
  productName: string;
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  varieties?: string;
}

const POTATO_VARIETIES = ['Cara', 'Spunta', 'Diamant', 'Colomba', 'Hermes', 'Lady Rosetta'];

export default function ProductInquiryDialog({ productName, children, open: controlledOpen, onOpenChange, varieties }: ProductInquiryDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;
  const [state, handleSubmit] = useForm("mgoyywzk");
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    country: '',
    email: '',
    message: '',
    variety: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const isPotatoes = productName.toLowerCase().includes('potato');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleVarietyChange = (value: string) => {
    setFormData(prev => ({ ...prev, variety: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    try {
      const validated = inquirySchema.parse(formData);
      
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
      toast.success('Inquiry sent successfully!', {
        description: `We'll get back to you about ${productName} soon.`,
      });
      
      setOpen(false);
      setFormData({ fullName: '', company: '', country: '', email: '', message: '', variety: '' });
    }
  }, [state.succeeded, open, productName, setOpen]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children && (
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Request Information</DialogTitle>
          <DialogDescription className="font-body">
            Get in touch with us for inquiries about <span className="font-semibold text-foreground">{productName}</span>.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={onSubmit} className="space-y-5 mt-4">
          <input type="hidden" name="productName" value={productName} />
          <input type="hidden" name="inquiryType" value="Product Inquiry" />
          {formData.variety && <input type="hidden" name="variety" value={formData.variety} />}
          
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
          
          {isPotatoes && varieties && (
            <div className="space-y-2">
              <Label htmlFor="variety">Potato Variety</Label>
              <Select value={formData.variety} onValueChange={handleVarietyChange}>
                <SelectTrigger id="variety">
                  <SelectValue placeholder="Select a variety (optional)" />
                </SelectTrigger>
                <SelectContent>
                  {POTATO_VARIETIES.map((variety) => (
                    <SelectItem key={variety} value={variety}>
                      {variety}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
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
