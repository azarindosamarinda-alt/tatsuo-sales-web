import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";
import Layout from "@/components/Layout";

// Use hash-based routing
function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        
        {/* Dynamic Product Route */}
        <Route path="/product/:slug">
          {(params) => (
            <Layout>
              <div className="container mx-auto py-20 px-4 min-h-[60vh] flex flex-col justify-center items-center text-center">
                <div className="bg-primary text-foreground px-4 py-1 mb-6 border-2 border-foreground font-display font-bold transform -rotate-2">
                  WORK IN PROGRESS
                </div>
                <h1 className="text-4xl md:text-6xl font-black font-display uppercase mb-6 leading-tight">
                  Product Detail: <br/>
                  <span className="text-primary">{params.slug}</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg mb-8">
                  Halaman detail spesifikasi lengkap sedang dalam tahap konstruksi akhir. Silakan hubungi sales kami untuk brosur PDF.
                </p>
                <a href="/" className="font-display font-bold uppercase border-b-2 border-foreground hover:bg-primary hover:border-transparent transition-colors">
                  ← KEMBALI KE BERANDA
                </a>
              </div>
            </Layout>
          )}
        </Route>

        {/* 404 Route */}
        <Route>
          <Layout>
             <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
              <h1 className="text-6xl md:text-9xl font-black font-display uppercase text-muted-foreground/20 mb-4">404</h1>
              <h2 className="text-2xl md:text-4xl font-bold font-display uppercase mb-8">Halaman Tidak Ditemukan</h2>
              <a href="/" className="px-8 py-3 bg-foreground text-background font-display font-bold uppercase hover:bg-primary hover:text-foreground transition-colors">
                Kembali ke Beranda
              </a>
             </div>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
