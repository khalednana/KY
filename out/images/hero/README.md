# Hero Images Gallery

Place your hero background images here for the animated carousel.

## How to Add Images:

1. **Add your image files** to this directory: `public/images/hero/`
   - Supported formats: JPG, PNG, WebP
   - Recommended size: 1920x1080 or larger
   - File size: Optimized for web (under 500KB each recommended)

2. **Update the image list** in `src/app/[lang]/page.tsx`:
   ```typescript
   const heroImages = [
     '/images/hero/potatoes-hero.jpg',
     '/images/hero/image2.jpg',
     '/images/hero/image3.jpg',
     // Add more images here...
   ];
   ```

## Example File Structure:
```
public/images/hero/
  ├── potatoes-hero.jpg
  ├── image2.jpg
  ├── image3.jpg
  └── image4.jpg
```

## Carousel Settings:

The carousel automatically cycles through images every 5 seconds (5000ms).
You can change this in `src/app/[lang]/page.tsx`:
```typescript
<HeroCarousel images={heroImages} interval={5000} />
```

The images will fade smoothly between each other with a 1-second transition.
