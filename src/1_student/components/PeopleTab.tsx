import { USERS, ASSIGNMENT_TEAMS } from "../../shared/data/seedData";

interface PeopleTabProps {
  assignmentId: string;
}

export default function PeopleTab({ assignmentId }: PeopleTabProps) {
  const memberIds = ASSIGNMENT_TEAMS[assignmentId] ?? [];
  const members = USERS.filter((u) => memberIds.includes(u.id));

  return (
    <div className="people-grid">
      {members.map((person) => (
        <div key={person.id} className="person-card">
          <div className="person-avatar">{person.initials}</div>
          <div className="person-info">
            <div className="person-name">{person.name}</div>
            <div className="person-number">{person.studentNumber}</div>
          </div>
        </div>
      ))}
      {members.length === 0 && (
        <div className="panel-sub" style={{ textAlign: "center" }}>
          No team members yet.
        </div>
      )}
    </div>
  );
}