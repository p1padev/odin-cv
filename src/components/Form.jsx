import '../styles/Form.css';
import EducationInputs from './EducationInputs';
import FormControls from './FormControls';
import PersonalInputs from './PersonalInputs';
import WorkInputs from './WorkInputs';

const inputComponentTable = {
  Personal: PersonalInputs,
  Education: EducationInputs,
  Work: WorkInputs,
};

export default function Form({
  title,
  formState,
  setErrorMessage,
  editingState: [isEditing, setIsEditing],
}) {
  const InputComponent = inputComponentTable[title] || null;
  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setErrorMessage('');
  };

  return (
    <form className="form" onSubmit={onSubmitFormHandler}>
      <FormControls
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      ></FormControls>
      {InputComponent !== null && (
        <InputComponent
          formState={formState}
          disabled={!isEditing}
        ></InputComponent>
      )}
    </form>
  );
}
