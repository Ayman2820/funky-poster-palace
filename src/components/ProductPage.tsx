
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, ShoppingCart, ArrowLeft, ThumbsUp } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Poster } from "@/data/posters";

interface ProductPageProps {
  poster: Poster;
  setCurrentPage: (page: "home" | "cart" | "checkout") => void;
  onViewProduct: (poster: Poster) => void;
}

export const ProductPage = ({ poster, setCurrentPage, onViewProduct }: ProductPageProps) => {
  const { addToCart } = useCart();
  const [selectedTab, setSelectedTab] = useState<"description" | "reviews">("description");

  const handleAddToCart = () => {
    addToCart({
      id: poster.id,
      title: poster.title,
      price: poster.price,
      image: poster.image,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => setCurrentPage("home")}
        className="mb-6 hover-scale"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Gallery
      </Button>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div>
          <img
            src={poster.image}
            alt={poster.title}
            className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
          />
        </div>

        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {poster.category}
            </Badge>
            <h1 className="text-4xl font-bold mb-4">{poster.title}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(poster.rating)
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-medium">({poster.rating})</span>
              <span className="text-gray-600">• {poster.reviews.length} reviews</span>
            </div>

            <p className="text-3xl font-bold text-purple-600 mb-6">₹{poster.price}</p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {poster.description}
            </p>

            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6 hover-scale"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <strong>Material:</strong> Premium Matte Paper
                </div>
                <div>
                  <strong>Size:</strong> 18" x 24"
                </div>
                <div>
                  <strong>Delivery:</strong> 3-5 Business Days
                </div>
                <div>
                  <strong>Return:</strong> 30 Days Return Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4 mb-6">
            <Button
              variant={selectedTab === "description" ? "default" : "ghost"}
              onClick={() => setSelectedTab("description")}
            >
              Description
            </Button>
            <Button
              variant={selectedTab === "reviews" ? "default" : "ghost"}
              onClick={() => setSelectedTab("reviews")}
            >
              Reviews ({poster.reviews.length})
            </Button>
          </div>

          {selectedTab === "description" && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Product Details</h3>
              <p className="text-gray-700 leading-relaxed">
                {poster.description} This high-quality poster is printed on premium matte paper 
                using advanced printing technology to ensure vibrant colors and sharp details. 
                Perfect for decorating your home, office, or gifting to someone special.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">Specifications:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Size: 18" x 24" (45cm x 61cm)</li>
                    <li>• Material: 250gsm Premium Matte Paper</li>
                    <li>• Finish: Anti-glare matte coating</li>
                    <li>• Colors: Fade-resistant inks</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Care Instructions:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Keep away from direct sunlight</li>
                    <li>• Frame for best protection</li>
                    <li>• Handle with clean, dry hands</li>
                    <li>• Store flat when not displayed</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "reviews" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">{poster.rating}</div>
                  <div className="flex items-center justify-center">
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
                  </div>
                  <div className="text-sm text-gray-600">
                    Based on {poster.reviews.length} reviews
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                {poster.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold">{review.userName}</span>
                      <span className="text-gray-500 text-sm">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                    <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      Helpful
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
