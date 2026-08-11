import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./1_student/pages/MainPage";
import CoursePage from "./1_student/pages/CoursePage";
import AssignmentPage from "./1_student/pages/AssignmentPage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route
          path="/course/:courseId/assignment/:assignmentId"
          element={<AssignmentPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}