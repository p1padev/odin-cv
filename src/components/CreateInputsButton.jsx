import { useState } from 'react';
import createBoilerplateInput from '../createBoilerplateInput';

export default function CreateInputsButton({
  boilerplate,
  setFormData,
  setIsEditing,
}) {
  const [id, setId] = useState(1);
  const handleCreateInputsButton = () => {
    const newBoiler = createBoilerplateInput(boilerplate, id);
    setFormData((formData) => [...formData, newBoiler]);
    setId((id) => (id += 1));
    setIsEditing(true);
  };

  return (
    <button
      type="button"
      className="form-fieldset_add"
      onClick={handleCreateInputsButton}
    >
      +
    </button>
  );
}
