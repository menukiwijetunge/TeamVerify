import { useState, useEffect } from "react";
import { loadFromStorage, saveToStorage } from "../../shared/data/storage";

interface InstructionsTabProps {
  assignmentId: string;
}

type Mode = "paste" | "upload";

interface InstructionsData {
  text: string;
  fileName: string | null;
}

export default function InstructionsTab({ assignmentId }: InstructionsTabProps) {
  const storageKey = `tv_instructions_${assignmentId}`;
  const [mode, setMode] = useState<Mode>("paste");
  const [data, setData] = useState<InstructionsData>(() =>
    loadFromStorage(storageKey, { text: "", fileName: null })
  );

  useEffect(() => {
    saveToStorage(storageKey, data);
  }, [data, storageKey]);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setData((prev) => ({ ...prev, fileName: file.name }));
    }
  }

  return (
    <div>
      <div className="mode-toggle">
        <button
          className={`mode-btn ${mode === "paste" ? "active" : ""}`}
          onClick={() => setMode("paste")}
        >
          Paste text
        </button>
        <button
          className={`mode-btn ${mode === "upload" ? "active" : ""}`}
          onClick={() => setMode("upload")}
        >
          Upload file
        </button>
      </div>

      {mode === "paste" ? (
        <textarea
          className="instructions-textarea"
          placeholder="Paste the assignment instructions here..."
          value={data.text}
          onChange={(e) => setData((prev) => ({ ...prev, text: e.target.value }))}
        />
      ) : (
        <label className="upload-box">
          <div>{data.fileName ?? "Click to upload a file"}</div>
          <input type="file" style={{ display: "none" }} onChange={handleFile} />
        </label>
      )}

      {(data.text || data.fileName) && (
        <div className="panel-sub" style={{ textAlign: "center", marginTop: 12 }}>
          Saved.
        </div>
      )}
    </div>
  );
}