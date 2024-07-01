import CreateInputsButton from './CreateInputsButton';
import Fieldset from './Fieldset';
import RemoveFieldButton from './RemoveFieldButton';
export const educationInputsDefault = {
  schoolName: 'UFSC',
  courseTitle: 'Bachelor in Computer Science',
  yearStart: '2016-06',
  yearEnd: '2020-06',
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
        boilerplate={educationInputsDefault}
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
                onChange={(e) => handleInputChange(e, educationField.id)}
              ></input>
              <label htmlFor={`courseTitle-` + educationField.id}>
                Course Title
              </label>
              <input
                value={educationField.courseTitle}
                id={`courseTitle-` + educationField.id}
                name="courseTitle"
                placeholder="B. Computer Science"
                required
                type="text"
                min="0"
                onChange={(e) => handleInputChange(e, educationField.id)}
              ></input>
              <label htmlFor={`yearStart-` + educationField.id}>
                Month/Year Started
              </label>
              <input
                value={educationField.yearStart}
                id={`yearStart-` + educationField.id}
                name="yearStart"
                required
                type="month"
                onChange={(e) => handleInputChange(e, educationField.id)}
              ></input>
              <label htmlFor={`yearEnd-` + educationField.id}>
                Month/Year Ended
              </label>
              <input
                value={educationField.yearEnd}
                id={`yearEnd-` + educationField.id}
                name="yearEnd"
                required
                type="month"
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
