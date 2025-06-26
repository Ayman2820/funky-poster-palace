
import { useState } from "react";
import { Header } from "@/components/Header";
import { CourseGrid } from "@/components/CourseGrid";
import { CourseDetail } from "@/components/CourseDetail";
import { Cart } from "@/components/Cart";
import { CheckoutPage } from "@/components/CheckoutPage";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "course" | "cart" | "checkout">("home");
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "programming" | "mathematics" | "science" | "business">("all");

  const handleSelectCourse = (course: any) => {
    setSelectedCourse(course);
    setCurrentPage("course");
  };

  const handleSetCurrentPage = (page: "home" | "cart" | "checkout") => {
    setCurrentPage(page);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header 
          currentPage={currentPage} 
          setCurrentPage={handleSetCurrentPage}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        {currentPage === "home" && (
          <main className="container mx-auto px-4 py-8">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                EduVidya
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Master new skills with premium video courses from expert instructors
              </p>
            </div>
            <CourseGrid 
              onSelectCourse={handleSelectCourse} 
              selectedCategory={selectedCategory}
            />
          </main>
        )}
        
        {currentPage === "course" && selectedCourse && (
          <CourseDetail 
            course={selectedCourse} 
            setCurrentPage={handleSetCurrentPage}
            onSelectCourse={handleSelectCourse}
          />
        )}
        
        {currentPage === "cart" && <Cart setCurrentPage={handleSetCurrentPage} />}
        {currentPage === "checkout" && <CheckoutPage setCurrentPage={handleSetCurrentPage} />}
      </div>
    </CartProvider>
  );
};

export default Index;
