
import { useState } from "react";
import { Header } from "@/components/Header";
import { NotesGrid } from "@/components/NotesGrid";
import { Cart } from "@/components/Cart";
import { CheckoutPage } from "@/components/CheckoutPage";
import { NotePreview } from "@/components/NotePreview";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "cart" | "checkout" | "preview">("home");
  const [selectedNote, setSelectedNote] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "jee" | "neet">("all");

  const handlePreviewNote = (note: any) => {
    setSelectedNote(note);
    setCurrentPage("preview");
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        {currentPage === "home" && (
          <main className="container mx-auto px-4 py-8">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                EduNotes Hub
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Master JEE & NEET with comprehensive study notes from top educators
              </p>
            </div>
            <NotesGrid 
              onPreviewNote={handlePreviewNote} 
              selectedCategory={selectedCategory}
            />
          </main>
        )}
        
        {currentPage === "cart" && <Cart setCurrentPage={setCurrentPage} />}
        {currentPage === "checkout" && <CheckoutPage setCurrentPage={setCurrentPage} />}
        {currentPage === "preview" && selectedNote && (
          <NotePreview 
            note={selectedNote} 
            setCurrentPage={setCurrentPage}
            onPreviewNote={handlePreviewNote}
          />
        )}
      </div>
    </CartProvider>
  );
};

export default Index;
