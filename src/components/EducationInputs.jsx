import CreateInputsButton from './CreateInputsButton';
import Fieldset from './Fieldset';
import RemoveFieldButton from './RemoveFieldButton';
export const EducationInputsDefault = {
  schoolName: 'UFSC',
  courseTitle: 'Bachelor in Computer Science',
  yearStart: '2016',
  yearEnd: '2020',
  id: 0,
};

export default function EducationInputs({
  formState: [formData, setFormData],
  disabled,
  setErrorMessage,
}) {
  const handleInputChange = (e, fieldId) => {
    setFormData(
      formData.map((educationField) => {
        if (educationField.id === fieldId) {
          return {
            ...educationField,
            [e.target.name]: e.target.value,
          };
        } else {
          return educationField;
        }
      })
    );
  };
  return (
    <>
      <CreateInputsButton
        boilerplate={EducationInputsDefault}
        setFormData={setFormData}
      ></CreateInputsButton>
      {formData.map((educationField) => {
        return (
          <div className="fieldset-container" key={educationField.id}>
            <Fieldset
              className="form-education_fieldset"
              disabled={disabled}
              setErrorMessage={setErrorMessage}
            >
              <label htmlFor={`schoolName-` + educationField.id}>
                School Name
              </label>
              <input
                value={educationField.schoolName}
                id={`schoolName-` + educationField.id}
                name="schoolName"
                placeholder="UFSC"
                required
                type="text"
                min="0"
                max="12"
                onChange={(e) => handleInputChange(e, educationField.id)}
              ></input>
            </Fieldset>
            <RemoveFieldButton
              id={educationField.id}
              setFormData={setFormData}
            ></RemoveFieldButton>
          </div>
        );
      })}
    </>
  );
}
