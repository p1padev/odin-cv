import '../styles/Form.css';
import EducationInputs from './EducationInputs';
import FormControls from './FormControls';
import PersonalInputs from './PersonalInputs';

const inputComponentTable = {
  Personal: PersonalInputs,
  Education: EducationInputs,
};

export default function Form({
  title,
  formState,
  editingState: [isEditing, setIsEditing],
  errorState: [errorMessage, setErrorMessage],
}) {
  const InputComponent = inputComponentTable[title] || null;

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
          formState={formState}
          disabled={!isEditing}
        ></InputComponent>
      )}
      <FormControls
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        errorMessage={errorMessage}
      ></FormControls>
    </form>
  );
}
