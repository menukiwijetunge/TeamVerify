import { useState } from "react";
import { useParams } from "react-router-dom";
import { ASSIGNMENTS } from "../../shared/data/seedData";
import Header from "../../shared/components/Header";

const TABS = ["People", "Instructions", "Task breakdown", "Overdue", "Gantt", "Reviews"] as const;
type Tab = (typeof TABS)[number];

export default function AssignmentPage() {
  const { courseId, assignmentId } = useParams();
  const assignment = ASSIGNMENTS.find((a) => a.id === assignmentId);
  const [activeTab, setActiveTab] = useState<Tab>("Task breakdown");

  if (!assignment) return <div style={{ padding: 24 }}>Assignment not found.</div>;

  return (
    <div className="page-shell">
      <Header
        backTo={`/course/${courseId}`}
        backLabel="Back to course"
        title={assignment.title}
      />

      <div className="workspace">
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

        <div className="main-panel">
          <div className="panel-title">{activeTab}</div>
          <div className="panel-sub">
            {activeTab} content goes here — we'll build this tab next.
          </div>
        </div>
      </div>
    </div>
  );
}