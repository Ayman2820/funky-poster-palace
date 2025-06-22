
import { useState } from "react";
import { Header } from "@/components/Header";
import { RestaurantGrid } from "@/components/RestaurantGrid";
import { RestaurantDetail } from "@/components/RestaurantDetail";
import { Cart } from "@/components/Cart";
import { CheckoutPage } from "@/components/CheckoutPage";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "restaurant" | "cart" | "checkout">("home");
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "fast-food" | "indian" | "chinese" | "italian">("all");

  const handleSelectRestaurant = (restaurant: any) => {
    setSelectedRestaurant(restaurant);
    setCurrentPage("restaurant");
  };

  const handleSetCurrentPage = (page: "home" | "cart" | "checkout") => {
    setCurrentPage(page);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <Header 
          currentPage={currentPage} 
          setCurrentPage={handleSetCurrentPage}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        {currentPage === "home" && (
          <main className="container mx-auto px-4 py-8">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
                FoodieHub
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Delicious food delivered to your doorstep in minutes
              </p>
            </div>
            <RestaurantGrid 
              onSelectRestaurant={handleSelectRestaurant} 
              selectedCategory={selectedCategory}
            />
          </main>
        )}
        
        {currentPage === "restaurant" && selectedRestaurant && (
          <RestaurantDetail 
            restaurant={selectedRestaurant} 
            setCurrentPage={handleSetCurrentPage}
            onSelectRestaurant={handleSelectRestaurant}
          />
        )}
        
        {currentPage === "cart" && <Cart setCurrentPage={handleSetCurrentPage} />}
        {currentPage === "checkout" && <CheckoutPage setCurrentPage={handleSetCurrentPage} />}
      </div>
    </CartProvider>
  );
};

export default Index;
