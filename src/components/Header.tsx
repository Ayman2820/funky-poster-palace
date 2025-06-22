
import { ShoppingCart, Home, Utensils, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: "home" | "cart" | "checkout") => void;
  selectedCategory: "all" | "fast-food" | "indian" | "chinese" | "italian";
  setSelectedCategory: (category: "all" | "fast-food" | "indian" | "chinese" | "italian") => void;
}

export const Header = ({ currentPage, setCurrentPage, selectedCategory, setSelectedCategory }: HeaderProps) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div 
            className="flex items-center space-x-2 cursor-pointer hover-scale"
            onClick={() => setCurrentPage("home")}
          >
            <Utensils className="h-8 w-8 text-orange-600 fill-orange-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              FoodieHub
            </span>
          </div>
          
          <nav className="flex items-center space-x-4">
            <Button
              variant={currentPage === "home" ? "default" : "ghost"}
              onClick={() => setCurrentPage("home")}
              className="hover-scale"
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            
            <Button
              variant={currentPage === "cart" ? "default" : "ghost"}
              onClick={() => setCurrentPage("cart")}
              className="relative hover-scale"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </Button>
          </nav>
        </div>
        
        {currentPage === "home" && (
          <div className="flex items-center justify-center space-x-2">
            <Filter className="h-4 w-4 text-gray-600" />
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="hover-scale"
            >
              All Cuisines
            </Button>
            <Button
              variant={selectedCategory === "fast-food" ? "default" : "outline"}
              onClick={() => setSelectedCategory("fast-food")}
              className="hover-scale bg-orange-500 hover:bg-orange-600 text-white"
            >
              Fast Food
            </Button>
            <Button
              variant={selectedCategory === "indian" ? "default" : "outline"}
              onClick={() => setSelectedCategory("indian")}
              className="hover-scale bg-amber-500 hover:bg-amber-600 text-white"
            >
              Indian
            </Button>
            <Button
              variant={selectedCategory === "chinese" ? "default" : "outline"}
              onClick={() => setSelectedCategory("chinese")}
              className="hover-scale bg-red-500 hover:bg-red-600 text-white"
            >
              Chinese
            </Button>
            <Button
              variant={selectedCategory === "italian" ? "default" : "outline"}
              onClick={() => setSelectedCategory("italian")}
              className="hover-scale bg-green-500 hover:bg-green-600 text-white"
            >
              Italian
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
