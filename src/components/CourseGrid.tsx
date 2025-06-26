
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users, Award, Play } from "lucide-react";
import { courses } from "@/data/courses";

interface CourseGridProps {
  onSelectCourse: (course: any) => void;
  selectedCategory: "all" | "programming" | "mathematics" | "science" | "business";
}

export const CourseGrid = ({ onSelectCourse, selectedCategory }: CourseGridProps) => {
  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const featuredCourses = courses.filter(course => course.featured);

  return (
    <div className="space-y-12 animate-fade-in">
      {selectedCategory === "all" && featuredCourses.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} onSelectCourse={onSelectCourse} featured />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {selectedCategory === "all" ? "All Courses" : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Courses`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} onSelectCourse={onSelectCourse} />
          ))}
        </div>
      </section>
    </div>
  );
};

const CourseCard = ({ course, onSelectCourse, featured = false }: { course: any; onSelectCourse: (course: any) => void; featured?: boolean }) => {
  return (
    <Card className={`group hover-scale cursor-pointer bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${featured ? 'ring-2 ring-indigo-200' : ''}`}>
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {featured && (
            <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          )}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button
              size="sm"
              className="bg-white/90 text-indigo-600 hover:bg-white"
              onClick={(e) => {
                e.stopPropagation();
                onSelectCourse(course);
              }}
            >
              <Play className="h-4 w-4 mr-2" />
              Preview
            </Button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              course.level === "Beginner" ? "bg-green-100 text-green-600" :
              course.level === "Intermediate" ? "bg-yellow-100 text-yellow-600" :
              "bg-red-100 text-red-600"
            }`}>
              {course.level}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium text-gray-600">{course.rating}</span>
              <span className="text-sm text-gray-500">({course.reviews})</span>
            </div>
          </div>
          
          <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
            {course.title}
          </h3>
          
          <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {course.duration}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {course.reviews} students
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-indigo-600">₹{course.price}</span>
              {course.originalPrice && (
                <span className="text-lg text-gray-400 line-through">₹{course.originalPrice}</span>
              )}
            </div>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onSelectCourse(course);
              }}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              View Course
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
