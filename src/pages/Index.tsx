
import { useState } from "react";
import { Header } from "@/components/Header";
import { PosterGrid } from "@/components/PosterGrid";
import { Cart } from "@/components/Cart";
import { CheckoutPage } from "@/components/CheckoutPage";
import { ProductPage } from "@/components/ProductPage";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "cart" | "checkout" | "product">("home");
  const [selectedPoster, setSelectedPoster] = useState<any>(null);

  const handleViewProduct = (poster: any) => {
    setSelectedPoster(poster);
    setCurrentPage("product");
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        {currentPage === "home" && (
          <main className="container mx-auto px-4 py-8">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Funky Poster Palace
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover amazing posters that transform your space into something extraordinary!
              </p>
            </div>
            <PosterGrid onViewProduct={handleViewProduct} />
          </main>
        )}
        
        {currentPage === "cart" && <Cart setCurrentPage={setCurrentPage} />}
        {currentPage === "checkout" && <CheckoutPage setCurrentPage={setCurrentPage} />}
        {currentPage === "product" && selectedPoster && (
          <ProductPage 
            poster={selectedPoster} 
            setCurrentPage={setCurrentPage}
            onViewProduct={handleViewProduct}
          />
        )}
      </div>
    </CartProvider>
  );
};

export default Index;
