
import { ShoppingCart, Home, BookOpen, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: "home" | "cart" | "checkout") => void;
  selectedCategory: "all" | "jee" | "neet";
  setSelectedCategory: (category: "all" | "jee" | "neet") => void;
}

export const Header = ({ currentPage, setCurrentPage, selectedCategory, setSelectedCategory }: HeaderProps) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-indigo-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div 
            className="flex items-center space-x-2 cursor-pointer hover-scale"
            onClick={() => setCurrentPage("home")}
          >
            <BookOpen className="h-8 w-8 text-indigo-600 fill-indigo-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              EduNotes Hub
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
                <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
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
              All Notes
            </Button>
            <Button
              variant={selectedCategory === "jee" ? "default" : "outline"}
              onClick={() => setSelectedCategory("jee")}
              className="hover-scale bg-blue-500 hover:bg-blue-600 text-white"
            >
              JEE
            </Button>
            <Button
              variant={selectedCategory === "neet" ? "default" : "outline"}
              onClick={() => setSelectedCategory("neet")}
              className="hover-scale bg-green-500 hover:bg-green-600 text-white"
            >
              NEET
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
