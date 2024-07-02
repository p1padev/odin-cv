export default function FormControls({ isEditing, setIsEditing, emptyState }) {
  return (
    <div className="form-controls">
      <button type="submit" disabled={!isEditing}>
        Save
      </button>
      <button
        type="button"
        disabled={isEditing || emptyState}
        onClick={() => setIsEditing(true)}
      >
        Edit
      </button>
    </div>
  );
}
