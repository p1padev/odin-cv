export default function FormControls({ isEditing, setIsEditing }) {
  return (
    <div className="form-controls">
      <button type="submit" disabled={!isEditing}>
        Save
      </button>
      <button
        type="button"
        disabled={isEditing}
        onClick={() => setIsEditing(true)}
      >
        Edit
      </button>
    </div>
  );
}
