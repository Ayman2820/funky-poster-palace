
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Star, User, BookOpen, Clock, ShoppingCart, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ReviewSection } from "@/components/ReviewSection";

interface NotePreviewProps {
  note: any;
  setCurrentPage: (page: string) => void;
  onPreviewNote: (note: any) => void;
}

export const NotePreview = ({ note, setCurrentPage, onPreviewNote }: NotePreviewProps) => {
  const [activeTab, setActiveTab] = useState<"preview" | "reviews">("preview");
  const { addToCart } = useCart();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const getCategoryColor = (category: string) => {
    return category === "jee" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800";
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => setCurrentPage("home")}
        className="mb-6 hover:bg-indigo-50"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Notes
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Note Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(note.category)}`}>
                      {note.category.toUpperCase()}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(note.difficulty)}`}>
                      {note.difficulty}
                    </span>
                  </div>
                  <CardTitle className="text-3xl text-gray-800">{note.title}</CardTitle>
                  <p className="text-lg text-gray-600 font-medium">{note.subject}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700 font-medium">{note.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {renderStars(note.rating)}
                  </div>
                  <span className="font-medium text-gray-700">{note.rating}</span>
                  <span className="text-gray-500">({note.totalReviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">{note.pages} pages</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-6">{note.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Topics Covered:</h3>
                <div className="flex flex-wrap gap-2">
                  {note.topics.map((topic: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Tab Navigation */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "preview"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab("reviews")}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "reviews"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <MessageCircle className="h-4 w-4 inline mr-1" />
                    Reviews ({note.totalReviews})
                  </button>
                </nav>
              </div>
              
              {/* Tab Content */}
              {activeTab === "preview" && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Note Preview</h4>
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {note.preview}
                  </div>
                </div>
              )}
              
              {activeTab === "reviews" && (
                <ReviewSection note={note} />
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Purchase Card */}
        <div className="lg:col-span-1">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg sticky top-24">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <span className="text-3xl font-bold text-indigo-600">₹{note.price}</span>
                  <span className="text-xl text-gray-500 line-through">₹{note.originalPrice}</span>
                </div>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {Math.round(((note.originalPrice - note.price) / note.originalPrice) * 100)}% OFF
                </span>
              </div>
              
              <Button
                onClick={() => addToCart(note)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 text-lg"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              
              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Instant download after purchase</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Lifetime access to notes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Expert verified content</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
