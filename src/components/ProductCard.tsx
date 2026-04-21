import { Link } from "wouter";
import { ArrowRight, Download } from "lucide-react";
import type { Product } from "@/data/products";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group border-thick border-foreground bg-card p-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-hard flex flex-col h-full relative">
      {/* Image Container with cut corner effect */}
      <div className="relative aspect-[4/3] overflow-hidden border-b-thick border-foreground bg-muted p-4 flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply opacity-0 transition-opacity group-hover:opacity-100 z-0" />
        <img 
          src={product.image} 
          alt={product.name}
          className="max-h-full max-w-full object-contain grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110 z-10"
        />
        <div className="absolute top-0 right-0 bg-primary px-3 py-1 font-display font-bold text-xs border-l-thick border-b-thick border-foreground z-20">
          {product.category.toUpperCase()}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="mb-2 font-display text-2xl font-bold leading-tight uppercase">
          {product.name}
        </h3>
        <div className="mb-4 h-1 w-12 bg-primary"></div>
        <p className="mb-6 flex-1 text-muted-foreground font-medium leading-relaxed text-sm">
          {product.shortDesc}
        </p>

        {/* Action Bar */}
        <div className="mt-auto space-y-3">
            <div className="flex items-center justify-between border-t-2 border-dashed border-foreground/30 pt-4">
              <span className="font-display font-bold text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                LIHAT SPESIFIKASI
              </span>
              <div className="flex h-8 w-8 items-center justify-center bg-foreground text-background transition-transform group-hover:rotate-45">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
            
            {product.brochureLink && (
               <Button variant="outline" size="sm" className="w-full border-2 border-foreground font-bold uppercase hover:bg-primary hover:text-foreground" asChild>
                 <a href={product.brochureLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <Download className="mr-2 h-4 w-4" /> Download Brosur
                 </a>
               </Button>
            )}
        </div>
      </div>
      
      {/* Full card link overlay - avoiding the brochure button */}
      <Link href={product.link ? product.link : `/product/${product.slug}`} className="absolute inset-0 z-0">
        <span className="sr-only">View {product.name}</span>
      </Link>
    </div>
  );
}
