import '../styles/Form.css';
import PersonalInputs from './PersonalInputs';

const inputComponentTable = {
  Personal: PersonalInputs,
};

export default function Form({
  title,
  formData,
  setFormData,
  editing: [isEditing, setIsEditing],
  error: [errorMessage, setErrorMessage],
}) {
  const InputComponent = inputComponentTable[title] || null;
  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(false);
        setErrorMessage('');
      }}
    >
      {InputComponent !== null && (
        <InputComponent
          handleChange={handleChange}
          formData={formData}
          disabled={!isEditing}
        ></InputComponent>
      )}
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
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
}
