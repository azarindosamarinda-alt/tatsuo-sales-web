import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { products, productCategories } from "@/data/products";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logoTatsuo from "@/assets/logo-tatsuo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b-thick border-foreground bg-background">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
          <img 
            src={logoTatsuo} 
            alt="Tatsuo Indonesia Logo" 
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={cn("font-display font-bold uppercase hover:text-primary transition-colors", location === "/" && "text-primary")}>
            Beranda
          </Link>
          
          {/* Dropdown Menu */}
          <div className="relative group" onMouseEnter={() => setProductMenuOpen(true)} onMouseLeave={() => setProductMenuOpen(false)}>
            <button className="flex items-center gap-1 font-display font-bold uppercase hover:text-primary transition-colors py-6">
              Produk <ChevronDown className="h-4 w-4" />
            </button>
            
            {/* Mega Menu Dropdown */}
            <div className={cn(
              "absolute left-1/2 -translate-x-1/2 top-full w-[800px] bg-background border-thick border-foreground shadow-hard p-6 grid grid-cols-3 gap-8 transition-all duration-200 opacity-0 invisible translate-y-4 z-50",
              productMenuOpen && "opacity-100 visible translate-y-0"
            )}>
              {/* Category Columns */}
              {productCategories.map((category) => (
                <div key={category} className="flex flex-col gap-3">
                  <h4 className="font-display font-black text-lg bg-foreground text-background px-2 py-1 inline-block self-start mb-2">
                    {category}
                  </h4>
                  <ul className="space-y-2">
                    {products.filter(p => p.category === category).map(product => (
                      <li key={product.id}>
                        <Link href={`/product/${product.slug}`} className="block text-sm font-medium hover:text-primary hover:translate-x-1 transition-all border-b border-dashed border-muted-foreground/30 pb-1">
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              {/* CTA in Menu */}
              <div className="col-span-3 mt-4 border-t-2 border-foreground pt-4 flex justify-between items-center bg-muted/30 p-4">
                <p className="font-medium text-sm">Butuh bantuan memilih unit?</p>
                <Button size="sm" className="font-display font-bold bg-primary text-foreground hover:bg-foreground hover:text-primary border-2 border-foreground shadow-hard-sm">
                  KONSULTASI GRATIS
                </Button>
              </div>
            </div>
          </div>

          <Link href="/about" className="font-display font-bold uppercase hover:text-primary transition-colors">
            Tentang Kami
          </Link>
          <Link href="/contact" className="font-display font-bold uppercase hover:text-primary transition-colors">
            Kontak
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://wa.me/6281230857759" target="_blank" className="flex items-center gap-2 font-display font-bold text-lg hover:text-primary transition-colors">
            <Phone className="h-5 w-5 fill-current" />
            <span className="hidden lg:inline">0812-3085-7759</span>
          </a>
          <Button onClick={() => document.getElementById("request-quote")?.scrollIntoView({ behavior: "smooth" })} className="font-display font-bold rounded-none border-2 border-foreground shadow-hard-sm hover:shadow-hard hover:-translate-y-1 transition-all bg-primary text-primary-foreground">
            MINTA PENAWARAN
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden p-2 border-2 border-foreground active:bg-primary">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b-thick border-foreground shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <Link href="/" onClick={() => setIsOpen(false)} className="font-display font-bold text-xl py-2 border-b border-dashed border-foreground/20">BERANDA</Link>
          <div className="flex flex-col gap-2">
            <span className="font-display font-bold text-xl py-2 text-muted-foreground">PRODUK</span>
            {products.map(p => (
              <Link key={p.id} href={`/product/${p.slug}`} onClick={() => setIsOpen(false)} className="pl-4 py-1 font-medium hover:text-primary">
                • {p.name}
              </Link>
            ))}
          </div>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="font-display font-bold text-xl py-2 border-b border-dashed border-foreground/20">KONTAK</Link>
          <Button className="w-full font-display font-bold rounded-none border-2 border-foreground bg-primary text-foreground mt-4">
            HUBUNGI SALES
          </Button>
        </div>
      )}
    </header>
  );
}
