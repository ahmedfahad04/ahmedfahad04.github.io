import { Route, Routes } from "react-router-dom";
import "./App.css";
import CourseHomePage from "./components/Course_Page/CourseHomePage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/course" element={<CourseHomePage />}></Route>
      </Routes>
    </main>
  );
}

export default App;
