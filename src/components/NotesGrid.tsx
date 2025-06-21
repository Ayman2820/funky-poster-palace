
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Eye, ShoppingCart, BookOpen, User, Clock } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { notes } from "@/data/notes";

interface NotesGridProps {
  onPreviewNote: (note: any) => void;
  selectedCategory: "all" | "jee" | "neet";
}

export const NotesGrid = ({ onPreviewNote, selectedCategory }: NotesGridProps) => {
  const { addToCart } = useCart();

  const filteredNotes = notes.filter(note => 
    selectedCategory === "all" || note.category === selectedCategory
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredNotes.map((note) => (
        <Card key={note.id} className="hover-scale bg-white/70 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={note.image}
              alt={note.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2 flex gap-1">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(note.category)}`}>
                {note.category.toUpperCase()}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(note.difficulty)}`}>
                {note.difficulty}
              </span>
            </div>
          </div>
          
          <CardHeader className="pb-2">
            <CardTitle className="text-lg line-clamp-2 text-gray-800">
              {note.title}
            </CardTitle>
            <p className="text-sm text-gray-600 font-medium">{note.subject}</p>
          </CardHeader>
          
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">{note.author}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {renderStars(note.rating)}
              </div>
              <span className="text-sm font-medium text-gray-700">{note.rating}</span>
              <span className="text-sm text-gray-500">({note.totalReviews})</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">{note.pages} pages</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-indigo-600">₹{note.price}</span>
              <span className="text-lg text-gray-500 line-through">₹{note.originalPrice}</span>
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                {Math.round(((note.originalPrice - note.price) / note.originalPrice) * 100)}% OFF
              </span>
            </div>
          </CardContent>
          
          <CardFooter className="flex space-x-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPreviewNote(note)}
              className="flex-1 hover:bg-indigo-50"
            >
              <Eye className="h-4 w-4 mr-1" />
              Preview
            </Button>
            <Button
              size="sm"
              onClick={() => addToCart(note)}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
