import {motion} from 'framer-motion'
import Image from 'next/image'
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline'
import {HeartIcon as HeartSolid} from '@heroicons/react/24/solid'

// Components (src/app/components/Product)

export const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <motion.button
    className="absolute right-6 top-5 text-slate-600 hover:text-slate-900 transition-colors rounded-full p-3 bg-white border border-gray-200 shadow-xs z-50 hover:cursor-pointer"
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
    whileTap={{ scale: 0.9 }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.2 }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </motion.button>
);

// 1. Product Image
export const ProductImage = ({ src, alt, layoutId }: { 
  src: string; 
  alt: string;
  layoutId?: string;
}) => (
  <motion.div 
    className="relative aspect-square rounded-lg overflow-hidden flex items-center justify-center"
    layoutId={layoutId}
    transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-center rounded-lg"
      sizes="(max-width: 768px) 100vw, 50vw"
      priority
    />
  </motion.div>
);

// 2. Category
export const ProductCategory = ({ category, layoutId, inCard = true }: { 
  category: string;
  layoutId?: string;
  inCard?: boolean;
}) => (
  <motion.span 
    className={`${inCard ? 'absolute left-4 top-4' : 'inline-block'} rounded-full bg-white/95 backdrop-blur-xs px-3 py-1.5 text-xs font-medium text-slate-700 shadow-xs border border-gray-100`}
    layoutId={layoutId}
    transition={{ duration: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
  >
    {category}
  </motion.span>
);

// 3. Price
export const ProductPrice = ({price, oldPrice, layoutId}: {
  price: number;
  oldPrice?: number;
  layoutId?: string;
}) => (
  <motion.div 
    className="flex flex-col items-start space-y-1" 
    layoutId={layoutId}
    transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
  >
    <div className="flex items-baseline gap-3">
      <span className="text-2xl font-light">
        {price.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}
      </span>
      {oldPrice && (
        <span className="text-sm text-slate-400 line-through">
          {oldPrice.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}
        </span>
      )}
    </div>
    {oldPrice && (
      <span className="text-xs font-medium bg-rose-100 text-rose-700 px-2 py-1 rounded-full">
        {Math.round(((oldPrice - price) / oldPrice) * 100)}% OFF
      </span>
    )}
  </motion.div>
);

// 4. Favorite Button
export const FavoriteButton = ({ 
  isFavorite,
  toggle,
  layoutId,
  className
}: { 
  isFavorite: boolean;
  toggle: () => void;
  layoutId?: string;
  className?: string;
}) => (
  <motion.button
    className={`${className || "absolute right-4 top-4"} rounded-full bg-white/95 backdrop-blur-sm p-2 shadow-sm border border-gray-100 z-20 cursor-pointer ${
      isFavorite ? 'text-rose-600' : 'text-slate-500 hover:text-rose-600'
    }`}
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      toggle();
    }}
    layoutId={layoutId}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
  >
    {isFavorite ? <HeartSolid className="h-6 w-6" /> : <HeartOutline className="h-6 w-6" />}
  </motion.button>
);
