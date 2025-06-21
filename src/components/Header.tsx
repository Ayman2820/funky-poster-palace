
import { ShoppingCart, Home, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: "home" | "cart" | "checkout") => void;
}

export const Header = ({ currentPage, setCurrentPage }: HeaderProps) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer hover-scale"
          onClick={() => setCurrentPage("home")}
        >
          <Star className="h-8 w-8 text-purple-600 fill-purple-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Poster Palace
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
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </Button>
        </nav>
      </div>
    </header>
  );
};
