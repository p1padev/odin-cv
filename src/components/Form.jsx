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
  formState: [state, handler],
  setErrorMessage,
  editingState: [isEditing, setIsEditing],
}) {
  const InputComponent = inputComponentTable[title] || null;
  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setErrorMessage('');
  };

  const isStateEmpty = Array.isArray(state) && state.length === 0;

  return (
    <form className="form" onSubmit={onSubmitFormHandler}>
      <FormControls
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        emptyState={isStateEmpty}
      ></FormControls>
      {InputComponent !== null && (
        <InputComponent
          formState={[state, handler]}
          disabled={!isEditing}
          setIsEditing={setIsEditing}
        ></InputComponent>
      )}
    </form>
  );
}
