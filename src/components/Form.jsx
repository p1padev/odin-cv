import '../styles/Form.css';
import PersonalInputs from './PersonalInputs';

const inputComponentTable = {
  Personal: PersonalInputs,
};

export default function Form({ title, formData, setFormData }) {
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
    <form className="form">
      {InputComponent !== null && (
        <InputComponent
          handleChange={handleChange}
          formData={formData}
        ></InputComponent>
      )}
    </form>
  );
}
