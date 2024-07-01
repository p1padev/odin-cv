export const EducationInputsDefault = {
  schoolName: 'University of Santa Catarina',
  courseTitle: 'Bachelor in Computer Science',
  yearStart: '2016',
  yearEnd: '2020',
  id: 0,
};

const boilerplateInput = Object.fromEntries(
  Object.keys(EducationInputsDefault).map((key) => [key, ''])
);

let nextId = 1;

export default function EducationInputs({
  formState: [formData, setFormData],
  disabled,
}) {
  const handleCreateInputs = () => {};
  return (
    <>
      <button
        type="button"
        className="form-btn_add"
        onClick={() => {
          nextId += 1;
        }}
      >
        +
      </button>
      {formData.map((educationAdded) => {
        return <fieldset disabled={disabled}></fieldset>;
      })}
    </>
  );
}
