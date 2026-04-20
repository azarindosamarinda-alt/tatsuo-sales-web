import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import LeadForm from "@/components/LeadForm";
import ProductivityCalculator from "@/components/ProductivityCalculator";
import { products, productCategories, accessories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowDown, CheckCircle2, FileText, Settings, ShieldCheck, MapPin, Truck, Zap, Activity, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-new.webp";
import logoTatsuo from "@/assets/logo-tatsuo.png";

export default function Home() {
  const scrollToForm = () => {
    document.getElementById("request-quote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* TOFU STAGE: Awareness & Problem Solution */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b-thick border-foreground">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-foreground/20 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <img 
            src={heroImage} 
            alt="Excavator Tatsuo bekerja di lahan konstruksi" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 pt-20">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary px-4 py-2 mb-6 border-2 border-foreground shadow-hard-sm transform -rotate-2 animate-in fade-in slide-in-from-left duration-700">
              <span className="font-display font-black text-lg tracking-widest">ENGINEERED FOR INDONESIA</span>
            </div>
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] uppercase text-foreground mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              PENAHLUK <br/>
              <span className="text-primary/50">SEGALA</span> <br/>
              MEDAN
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mb-10 border-l-4 border-primary pl-6 leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              Solusi inovatif untuk infrastruktur modern. Satu alat dengan dua fungsi penggerak yang siap mengoptimalkan produktivitas kerja di segala kondisi situs konstruksi Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <Button onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })} size="lg" className="h-16 px-8 text-xl font-display font-bold uppercase rounded-none border-thick border-foreground bg-foreground text-background hover:bg-primary hover:text-foreground shadow-hard transition-all hover:translate-y-1 hover:shadow-none">
                Lihat Katalog Produk
              </Button>
              <Button onClick={scrollToForm} variant="outline" size="lg" className="h-16 px-8 text-xl font-display font-bold uppercase rounded-none border-thick border-foreground bg-transparent hover:bg-muted shadow-hard-sm transition-all">
                Minta Penawaran
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 hidden md:block">
          <ArrowDown className="h-8 w-8 text-foreground" />
        </div>
      </section>

      {/* Marquee Social Proof */}
      <div className="bg-primary border-b-thick border-foreground overflow-hidden py-4">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center font-display font-black text-2xl md:text-4xl uppercase tracking-widest text-foreground">
          <span>INNOVATIVE WHEEL-CRAWLER HYBRID SYSTEM</span>
          <img src={logoTatsuo} alt="Tatsuo" className="h-8 w-auto rounded-full bg-white p-1 border border-foreground" />
          <span>THE ULTIMATE ALL-TERRAIN SOLUTION</span>
          <img src={logoTatsuo} alt="Tatsuo" className="h-8 w-auto rounded-full bg-white p-1 border border-foreground" />
          <span>EFFICIENCY MEETS MULTI-TERRAIN POWER</span>
          <img src={logoTatsuo} alt="Tatsuo" className="h-8 w-auto rounded-full bg-white p-1 border border-foreground" />
          <span>INNOVATIVE WHEEL-CRAWLER HYBRID SYSTEM</span>
          <img src={logoTatsuo} alt="Tatsuo" className="h-8 w-auto rounded-full bg-white p-1 border border-foreground" />
          <span>THE ULTIMATE ALL-TERRAIN SOLUTION</span>
        </div>
      </div>

      {/* KEUNGGULAN UTAMA (NEW SECTION BASED ON TEXT) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-5xl md:text-6xl uppercase mb-4">
              Kenapa <span className="text-primary text-stroke-foreground">Tatsuo</span> Berbeda?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kombinasi unik teknologi roda dan rantai dengan harga kompetitif, dirancang khusus untuk infrastruktur Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card border-2 border-foreground p-8 hover:shadow-hard transition-all group">
              <div className="h-14 w-14 bg-foreground text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-foreground transition-colors">
                <Settings className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-2xl uppercase mb-4">Dual Mode System</h3>
              <p className="text-muted-foreground leading-relaxed">
                Inovasi <strong>Wheel & Crawler</strong> dalam satu unit. Gunakan mode roda untuk mobilisasi cepat di aspal tanpa towing, dan mode crawler untuk stabilitas maksimal di medan lumpur.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card border-2 border-foreground p-8 hover:shadow-hard transition-all group">
              <div className="h-14 w-14 bg-foreground text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-foreground transition-colors">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-2xl uppercase mb-4">Mobilitas Perkotaan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kecepatan hingga <strong>25 km/jam</strong> dengan ban karet. Sangat lincah untuk proyek drainase kota dan perbaikan jalan tanpa merusak aspal.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card border-2 border-foreground p-8 hover:shadow-hard transition-all group">
              <div className="h-14 w-14 bg-foreground text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-foreground transition-colors">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-2xl uppercase mb-4">Mesin Yanmar Jepang</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ditenagai mesin <strong>Yanmar</strong> yang legendaris. Tangguh, hemat bahan bakar, dan mudah perawatannya, menjamin biaya operasional rendah jangka panjang.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card border-2 border-foreground p-8 hover:shadow-hard transition-all group">
              <div className="h-14 w-14 bg-foreground text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-foreground transition-colors">
                <Activity className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-2xl uppercase mb-4">HIDROLIK RESPONSIF & KUAT</h3>
              <p className="text-muted-foreground leading-relaxed">
                Menggunakan pompa hidrolik berkualitas tinggi yang memberikan tenaga galian besar namun tetap halus (smooth) saat dioperasikan. Memastikan produktivitas maksimal bahkan untuk material tanah yang keras atau padat.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-card border-2 border-foreground p-8 hover:shadow-hard transition-all group">
              <div className="h-14 w-14 bg-foreground text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-foreground transition-colors">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-2xl uppercase mb-4">Nilai Ekonomis Tinggi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Solusi cerdas bagi kontraktor. Performa alat berat modern dengan harga jauh lebih terjangkau dibanding merek premium lainnya.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-card border-2 border-foreground p-8 hover:shadow-hard transition-all group">
              <div className="h-14 w-14 bg-foreground text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-foreground transition-colors">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="font-display font-bold text-2xl uppercase mb-4">Layanan Purna Jual</h3>
              <p className="text-muted-foreground leading-relaxed">
                Garansi panjang hingga <strong>2.000 jam</strong>, gratis maintenance 3x, dan dukungan leasing terpercaya (BRI Finance, BFI, dll).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="py-16 bg-muted/50 border-y-thick border-foreground">
        <div className="container mx-auto px-4">
          <ProductivityCalculator />
        </div>
      </section>

      {/* MOFU STAGE: Product Catalog & Specs */}
      <section className="py-24 bg-background" id="products">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-foreground pb-4">
            <div>
              <h2 className="font-display font-black text-5xl md:text-6xl uppercase mb-2">Line Up Produk</h2>
              <p className="text-xl text-muted-foreground font-medium">Spesifikasi lengkap untuk kebutuhan spesifik Anda.</p>
            </div>
          </div>

          <div className="space-y-20">
            {productCategories.map((category) => (
              <div key={category} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 bg-foreground text-background flex items-center justify-center font-bold">#</div>
                  <h3 className="font-display font-bold text-3xl uppercase tracking-tight">{category}</h3>
                  <div className="h-1 flex-1 bg-foreground/10"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {products.filter(p => p.category === category).map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESSORIES SECTION */}
      <section className="py-24 bg-foreground text-background border-y-thick border-primary">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <span className="bg-primary text-foreground px-3 py-1 font-display font-bold text-sm border-2 border-background mb-4 inline-block">MAXIMIZE UTILITY</span>
              <h2 className="font-display font-black text-4xl md:text-6xl uppercase mb-4 text-background">
                Accessories Excavator <br/> Implementation
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tingkatkan fungsionalitas unit Tatsuo Anda dengan berbagai attachment resmi.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {accessories.map((acc) => (
                <div key={acc.id} className="group border-2 border-background bg-foreground p-4 hover:border-primary transition-all">
                  <div className="aspect-square bg-muted/10 border-2 border-background mb-4 overflow-hidden relative">
                     <img src={acc.image} alt={acc.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-100" />
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase mb-2 text-background group-hover:text-primary transition-colors">{acc.name}</h3>
                  <p className="text-muted-foreground text-sm">{acc.description}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* BOFU STAGE: Call to Action Form */}
      <section className="py-32 bg-primary/10 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-8 text-foreground leading-none">
                Mulai Proyek <br/> Anda <span className="text-primary bg-foreground px-2">Sekarang</span>
              </h2>
              <p className="text-2xl font-bold mb-8 opacity-90">
                Jangan biarkan alat yang salah menghambat deadline Anda.
              </p>
              <ul className="space-y-4 mb-12 font-medium text-lg">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-primary fill-foreground h-6 w-6" /> Konsultasi kebutuhan unit gratis</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-primary fill-foreground h-6 w-6" /> Penawaran harga transparan</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-primary fill-foreground h-6 w-6" /> Simulasi kredit & leasing</li>
              </ul>
              
              <div className="bg-foreground text-background p-6 border-l-4 border-primary">
                <p className="font-bold uppercase text-primary mb-2">Sales Hotline</p>
                <p className="font-display font-black text-4xl">0812-3085-7759</p>
              </div>
            </div>

            {/* Embed Lead Form */}
            <LeadForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
