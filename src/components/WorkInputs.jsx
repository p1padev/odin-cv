import CreateInputsButton from './CreateInputsButton';
import Fieldset from './Fieldset';
import RemoveFieldButton from './RemoveFieldButton';
export const workInputsDefault = {
  companyName: 'Odin',
  positionTitle: 'Developer',
  description: 'I worked on some great projects there',
  yearStart: '2016-06',
  yearEnd: '2020-06',
  id: 0,
};

export default function WorkInputs({
  formState: [formData, setFormData],
  disabled,
  setIsEditing,
}) {
  const handleInputChange = (e, fieldId) => {
    setFormData(
      formData.map((workField) => {
        if (workField.id === fieldId) {
          return {
            ...workField,
            [e.target.name]: e.target.value,
          };
        } else {
          return workField;
        }
      })
    );
  };
  return (
    <>
      {formData.map((workField) => {
        return (
          <div className="fieldset-container" key={workField.id}>
            <Fieldset className="form-work_fieldset" disabled={disabled}>
              <label htmlFor={`companyName-` + workField.id}>
                Company Name
              </label>
              <input
                value={workField.companyName}
                id={`companyName-` + workField.id}
                name="companyName"
                placeholder="Odin"
                required
                type="text"
                min="0"
                onChange={(e) => handleInputChange(e, workField.id)}
              ></input>
              <label htmlFor={`positionTitle-` + workField.id}>
                Position Title
              </label>
              <input
                value={workField.positionTitle}
                id={`positionTitle-` + workField.id}
                name="positionTitle"
                placeholder="Developer"
                required
                type="text"
                min="0"
                onChange={(e) => handleInputChange(e, workField.id)}
              ></input>
              <label htmlFor={`description-` + workField.id}>
                Job Description
              </label>
              <textarea
                value={workField.description}
                id={`description-` + workField.id}
                name="description"
                required
                onChange={(e) => handleInputChange(e, workField.id)}
              />
              <label htmlFor={`yearStart-` + workField.id}>
                Month/Year Started
              </label>
              <input
                value={workField.yearStart}
                id={`yearStart-` + workField.id}
                name="yearStart"
                required
                type="month"
                onChange={(e) => handleInputChange(e, workField.id)}
              ></input>
              <label htmlFor={`yearEnd-` + workField.id}>
                Month/Year Ended
              </label>
              <input
                value={workField.yearEnd}
                id={`yearEnd-` + workField.id}
                name="yearEnd"
                required
                type="month"
                onChange={(e) => handleInputChange(e, workField.id)}
              ></input>
            </Fieldset>
            <RemoveFieldButton
              id={workField.id}
              setFormData={setFormData}
            ></RemoveFieldButton>
          </div>
        );
      })}
      <CreateInputsButton
        boilerplate={workInputsDefault}
        setFormData={setFormData}
        setIsEditing={setIsEditing}
      ></CreateInputsButton>
    </>
  );
}
