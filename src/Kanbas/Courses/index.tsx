import { courses } from "../../Kanbas/Database";
import Modules from "./Modules";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Home from "./Home";
import Assignments from "./Assignments";
import { FaBars } from "react-icons/fa";


function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const home = useLocation().pathname.split('/').pop() === 'Home';

  return (
    <>
    <div className="d-flex">
      <div className="d-none d-md-block">
        <h1><HiMiniBars3 /> Course {course?.name} {home ? "> Home" : ""}</h1> <hr />
        <CourseNavigation />
        <div>
          <div
            className="overflow-y-scroll position-absolute bottom-10 end-0"
            style={{ left: "320px", top: "75px" }} >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home/>} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />
              <Route path="People" element={<h1>People</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
    <div className="d-md-none p-3">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="/#/Kanbas/Dashboard/">
            <button><FaBars /></button>
          </a>
          <a href="/#/Kanbas/Dashboard/">
            <button className="btn btn-secondary dropdown-toggle"></button>
          </a>
        </div>
      </nav>
      <h1>Course {course?.name} {home ? "> Home" : ""}</h1> <hr />
      <Home />
    </div>
    </>
  );
}

export default Courses
