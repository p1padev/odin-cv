export default function FormControls({
  isEditing,
  setIsEditing,
  errorMessage,
}) {
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
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
