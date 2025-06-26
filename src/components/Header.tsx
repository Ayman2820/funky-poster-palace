
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Search, BookOpen } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  currentPage: "home" | "course" | "cart" | "checkout";
  setCurrentPage: (page: "home" | "cart" | "checkout") => void;
  selectedCategory: "all" | "programming" | "mathematics" | "science" | "business";
  setSelectedCategory: (category: "all" | "programming" | "mathematics" | "science" | "business") => void;
}

export const Header = ({ currentPage, setCurrentPage, selectedCategory, setSelectedCategory }: HeaderProps) => {
  const { getTotalItems } = useCart();

  const categories = [
    { id: "all", label: "All Courses" },
    { id: "programming", label: "Programming" },
    { id: "mathematics", label: "Mathematics" },
    { id: "science", label: "Science" },
    { id: "business", label: "Business" }
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              EduVidya
            </span>
          </div>

          {currentPage === "home" && (
            <div className="hidden md:flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id as any)}
                  className={selectedCategory === category.id ? "bg-indigo-600 hover:bg-indigo-700" : ""}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          )}

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-2">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search courses..."
                className="bg-transparent outline-none text-sm"
              />
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage("cart")}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>
            
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {currentPage === "home" && (
          <div className="md:hidden pb-4">
            <div className="flex overflow-x-auto space-x-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id as any)}
                  className={`whitespace-nowrap flex-shrink-0 ${
                    selectedCategory === category.id ? "bg-indigo-600 hover:bg-indigo-700" : ""
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
