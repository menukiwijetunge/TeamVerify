import { Link, useParams } from "react-router-dom";
import { COURSES, ASSIGNMENTS } from "../../shared/data/seedData";
import Header from "../../shared/components/Header";

export default function CoursePage() {
  const { courseId } = useParams();
  const course = COURSES.find((c) => c.id === courseId);
  const assignments = ASSIGNMENTS.filter((a) => a.courseId === courseId);

  if (!course) return <div style={{ padding: 24 }}>Course not found.</div>;

return (
  <div className="page-shell">
    <Header backTo="/" backLabel="Back to courses" />
    <div className="content-container">
      <div className="eyebrow">{course.name}</div>
      <div className="tile-grid">
        {assignments.map((a) => (
          <Link key={a.id} to={`/course/${course.id}/assignment/${a.id}`} className="tile">
            <div className="tile-title">{a.title}</div>
            <div className="tile-meta">
              Due {a.dueDate} &middot; Team: {a.team}
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);
}