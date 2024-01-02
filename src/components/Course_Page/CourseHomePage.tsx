import Footer from "../Footer";
import CourseCard from "./CourseCard";
import CourseContent from "./CourseContent";

export default function CourseHomePage() {
  return (
    <div className="h-screen bg-sky-950 text-white flex flex-col">
      {/* Course content */}
      <div className="flex-grow">
        <div className="bg-gray-600 h-1/4">
          {/* Top Section */}
          <div className="flex justify-center">
            <CourseCard />
          </div>
          {/* Bottom Section */}
          <div className="mt-2 bg-sky-950 flex flex-col justify-center items-center">
            <CourseContent />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
