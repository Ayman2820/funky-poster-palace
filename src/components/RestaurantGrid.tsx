
import { restaurants } from "@/data/restaurants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Utensils } from "lucide-react";

interface RestaurantGridProps {
  onSelectRestaurant: (restaurant: any) => void;
  selectedCategory: "all" | "fast-food" | "indian" | "chinese" | "italian";
}

export const RestaurantGrid = ({ onSelectRestaurant, selectedCategory }: RestaurantGridProps) => {
  const filteredRestaurants = selectedCategory === "all" 
    ? restaurants 
    : restaurants.filter(restaurant => restaurant.cuisine === selectedCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRestaurants.map((restaurant) => (
        <Card 
          key={restaurant.id} 
          className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale cursor-pointer"
          onClick={() => onSelectRestaurant(restaurant)}
        >
          <CardHeader className="p-0">
            <div className="relative">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {restaurant.featured && (
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Featured
                </div>
              )}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium">{restaurant.rating}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-2">
              <CardTitle className="text-xl text-gray-800 line-clamp-1">
                {restaurant.name}
              </CardTitle>
              <span className="text-sm text-orange-600 font-medium capitalize">
                {restaurant.cuisine}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {restaurant.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-gray-500">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{restaurant.deliveryTime}</span>
              </div>
              <Button 
                size="sm" 
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectRestaurant(restaurant);
                }}
              >
                <Utensils className="h-4 w-4 mr-1" />
                Order Now
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
