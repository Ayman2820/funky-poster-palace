
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { posters } from "@/data/posters";
import { useCart } from "@/context/CartContext";

interface PosterGridProps {
  onViewProduct: (poster: any) => void;
}

export const PosterGrid = ({ onViewProduct }: PosterGridProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (poster: any, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: poster.id,
      title: poster.title,
      price: poster.price,
      image: poster.image,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {posters.map((poster, index) => (
        <Card 
          key={poster.id} 
          className="group hover-scale cursor-pointer overflow-hidden border-2 border-transparent hover:border-purple-200 transition-all duration-300 animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => onViewProduct(poster)}
        >
          <div className="relative overflow-hidden">
            <img
              src={poster.image}
              alt={poster.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Button
              size="sm"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-purple-600"
              onClick={(e) => {
                e.stopPropagation();
                onViewProduct(poster);
              }}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
          
          <CardContent className="p-4">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(poster.rating)
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-1">({poster.rating})</span>
            </div>
            
            <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition-colors">
              {poster.title}
            </h3>
            
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {poster.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-purple-600">
                ₹{poster.price}
              </span>
              <Button
                size="sm"
                onClick={(e) => handleAddToCart(poster, e)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover-scale"
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
