import Footer from "../Footer";
import CourseCard from "./CourseCard";

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
        </div>

        {/* <div className="bg-slate-900 h-3/4">Below Section</div> */}
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
