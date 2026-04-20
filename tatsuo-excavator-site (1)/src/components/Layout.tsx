import Navbar from "./Navbar";
import logoTatsuo from "@/assets/logo-tatsuo.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-body">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <footer className="bg-foreground text-background border-t-thick border-primary pt-16 pb-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-2 border-2 border-primary">
                <img src={logoTatsuo} alt="Tatsuo Indonesia Logo" className="h-12 w-auto object-contain filter invert contrast-200 grayscale" />
              </div>
              <span className="font-display text-2xl font-black uppercase tracking-tighter sr-only">Tatsuo Indonesia</span>
            </div>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              Mitra terpercaya untuk solusi alat berat berkualitas tinggi. 
              Menghadirkan performa, durabilitas, dan efisiensi untuk proyek konstruksi di seluruh Indonesia.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-primary uppercase">Hubungi Kami</h4>
            <div className="space-y-4 text-muted-foreground">
              <p className="font-bold text-white">Head Office</p>
              <p>Jl. Margomulyo Indah G/4, Surabaya</p>
              <p className="flex items-center gap-2 mt-4">
                <span className="text-primary">Phone:</span> 0812-3085-7759
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">Email:</span> sales@tatsuo.co.id
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-primary uppercase">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4">Produk Excavator</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4">Layanan Purna Jual</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4">Berita & Update</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4">Karir</a></li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto px-4 pt-8 border-t border-white/20 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2026 Tatsuo Indonesia. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 font-display font-bold">
            <a href="#" className="hover:text-white">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white">TERMS OF SERVICE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
