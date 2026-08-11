import { useState } from "react";
import { useParams } from "react-router-dom";
import { ASSIGNMENTS, COURSES } from "../../shared/data/seedData";
import Header from "../../shared/components/Header";
import PeopleTab from "../components/PeopleTab.tsx";
import InstructionsTab from "../components/InstructionsTab";

const TABS = ["People", "Instructions", "Task breakdown", "Overdue", "Gantt", "Reviews"] as const;
type Tab = (typeof TABS)[number];

export default function AssignmentPage() {
  const { courseId, assignmentId } = useParams();
  const assignment = ASSIGNMENTS.find((a) => a.id === assignmentId);
  const course = COURSES.find((c) => c.id === courseId);
  const [activeTab, setActiveTab] = useState<Tab>("Task breakdown");

  if (!assignment) return <div style={{ padding: 24 }}>Assignment not found.</div>;

  return (
    <div className="page-shell">
      <Header backTo={`/course/${courseId}`} backLabel="Back to course" />

      <div className="workspace">
        <div className="sidebar-column">
          <div className="assignment-banner">
            {course && <div className="banner-subject">{course.name}</div>}
            <div className="banner-title">{assignment.title}</div>
          </div>
          <div className="sidebar">
            {TABS.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`sidebar-item ${activeTab === tab ? "active" : ""}`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        <div className="main-panel">
          <div className="content-container">
            <div className="panel-title">{activeTab}</div>
            {activeTab === "People" ? (
              <PeopleTab assignmentId={assignment.id} />
            ) : activeTab === "Instructions" ? (
              <InstructionsTab assignmentId={assignment.id} />
            ) : (
              <div className="panel-sub" style={{ textAlign: "center" }}>
                {activeTab} content goes here — we'll build this tab next.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}