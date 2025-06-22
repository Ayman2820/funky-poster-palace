
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Star, Clock, Plus, Leaf } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface RestaurantDetailProps {
  restaurant: any;
  setCurrentPage: (page: "home" | "cart" | "checkout") => void;
  onSelectRestaurant: (restaurant: any) => void;
}

export const RestaurantDetail = ({ restaurant, setCurrentPage, onSelectRestaurant }: RestaurantDetailProps) => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<"all" | "starter" | "main" | "side">("all");

  const filteredItems = selectedCategory === "all" 
    ? restaurant.menuItems 
    : restaurant.menuItems.filter((item: any) => item.category === selectedCategory);

  const handleAddToCart = (item: any) => {
    addToCart({
      ...item,
      restaurantName: restaurant.name
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => setCurrentPage("home")}
        className="mb-6 hover:bg-orange-50"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Restaurants
      </Button>

      {/* Restaurant Header */}
      <div className="mb-8">
        <div className="relative">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-end">
            <div className="p-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
              <p className="text-lg mb-2">{restaurant.description}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{restaurant.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-5 w-5" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <span className="capitalize bg-white/20 px-3 py-1 rounded-full text-sm">
                  {restaurant.cuisine}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex items-center space-x-4 mb-6">
        <Button
          variant={selectedCategory === "all" ? "default" : "outline"}
          onClick={() => setSelectedCategory("all")}
        >
          All Items
        </Button>
        <Button
          variant={selectedCategory === "starter" ? "default" : "outline"}
          onClick={() => setSelectedCategory("starter")}
        >
          Starters
        </Button>
        <Button
          variant={selectedCategory === "main" ? "default" : "outline"}
          onClick={() => setSelectedCategory("main")}
        >
          Main Course
        </Button>
        <Button
          variant={selectedCategory === "side" ? "default" : "outline"}
          onClick={() => setSelectedCategory("side")}
        >
          Sides
        </Button>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item: any) => (
          <Card key={item.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="p-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-lg text-gray-800 line-clamp-1">
                  {item.name}
                </CardTitle>
                {item.veg && (
                  <Leaf className="h-5 w-5 text-green-500 fill-green-500 flex-shrink-0" />
                )}
              </div>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-orange-600">₹{item.price}</span>
                <Button 
                  size="sm" 
                  onClick={() => handleAddToCart(item)}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
