import { Link } from "react-router-dom";
import { COURSES, ASSIGNMENTS } from "../../shared/data/seedData";
import { getGradientForCourse, getLightTintForCourse } from "../../shared/utils/gradients";
import Header from "../../shared/components/Header";

export default function MainPage() {
  return (
    <div className="page-shell">
      <Header />
      <div className="content-container">
        <div className="eyebrow">Your courses</div>
        <div className="tile-grid">
          {COURSES.map((course) => {
            const count = ASSIGNMENTS.filter((a) => a.courseId === course.id).length;
            return (
              <Link
                key={course.id}
                to={`/course/${course.id}`}
                className="tile tile-course"
                style={{
                  "--tile-gradient": getGradientForCourse(course.id),
                  "--tile-bg-light": getLightTintForCourse(course.id),
                } as React.CSSProperties}
              >
                <div className="tile-code">{course.code}</div>
                <div className="tile-title">{course.name}</div>
                <div className="tile-meta">
                  {count} assignment{count !== 1 ? "s" : ""}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}