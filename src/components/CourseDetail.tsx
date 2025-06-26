
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Star, Clock, Users, Award, Play, CheckCircle, Lock } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface CourseDetailProps {
  course: any;
  setCurrentPage: (page: "home" | "cart" | "checkout") => void;
  onSelectCourse: (course: any) => void;
}

export const CourseDetail = ({ course, setCurrentPage, onSelectCourse }: CourseDetailProps) => {
  const { addToCart, items } = useCart();
  const isInCart = items.some(item => item.id === course.id);

  const handleAddToCart = () => {
    addToCart({
      ...course,
      restaurantName: "EduVidya",
      description: course.description,
      veg: true
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => setCurrentPage("home")}
        className="mb-6 hover:bg-indigo-50"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Courses
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="relative">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
              <Button size="lg" className="bg-white/90 text-indigo-600 hover:bg-white">
                <Play className="h-6 w-6 mr-2" />
                Preview Course
              </Button>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                course.level === "Beginner" ? "bg-green-100 text-green-600" :
                course.level === "Intermediate" ? "bg-yellow-100 text-yellow-600" :
                "bg-red-100 text-red-600"
              }`}>
                {course.level}
              </span>
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="font-medium">{course.rating}</span>
                <span className="text-gray-500">({course.reviews} reviews)</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">{course.title}</h1>
            <p className="text-xl text-gray-600 mb-4">Instructor: {course.instructor}</p>
            <p className="text-gray-700 text-lg leading-relaxed">{course.description}</p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">What you'll learn</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Course Curriculum</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {course.curriculum.map((section: any, sectionIndex: number) => (
                <div key={sectionIndex} className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{section.section}</h3>
                  <div className="space-y-3">
                    {section.lessons.map((lesson: any, lessonIndex: number) => (
                      <div key={lessonIndex} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center space-x-3">
                          {lesson.preview ? (
                            <Play className="h-4 w-4 text-indigo-600" />
                          ) : (
                            <Lock className="h-4 w-4 text-gray-400" />
                          )}
                          <span className="text-gray-700">{lesson.title}</span>
                          {lesson.preview && (
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                              Free Preview
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg sticky top-24">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-3xl font-bold text-indigo-600">₹{course.price}</span>
                  {course.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">₹{course.originalPrice}</span>
                  )}
                </div>
                {course.originalPrice && (
                  <span className="text-green-600 font-medium">
                    Save ₹{course.originalPrice - course.price}!
                  </span>
                )}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="font-medium">{course.duration}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Students:</span>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="font-medium">{course.reviews}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Level:</span>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    <span className="font-medium">{course.level}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleAddToCart}
                  disabled={isInCart}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 text-lg"
                >
                  {isInCart ? "Added to Cart" : "Add to Cart"}
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-indigo-300 text-indigo-600 hover:bg-indigo-50"
                >
                  Buy Now
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold text-gray-800 mb-3">This course includes:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lifetime access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Certificate of completion
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mobile and desktop access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Downloadable resources
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
