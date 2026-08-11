import { Link } from "react-router-dom";

interface HeaderProps {
  backTo?: string;
  backLabel?: string;
  title?: string;
}

export default function Header({ backTo, backLabel, title }: HeaderProps) {
  return (
    <div className="page-header">
      <div>
        <div className="wordmark">
          Team<span>Verify</span>
        </div>
        {backTo && (
          <Link to={backTo} className="back-link">
            &larr; {backLabel ?? "Back"}
          </Link>
        )}
        {title && <h1 className="page-title">{title}</h1>}
      </div>
    </div>
  );
}