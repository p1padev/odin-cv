export default function RemoveFieldButton({ id, setFormData }) {
  const handleRemoveClick = () => {
    setFormData((prev) =>
      prev.filter((field) => {
        return field.id !== id;
      })
    );
  };
  return (
    <button className="form-fieldset_remove" onClick={handleRemoveClick}>
      Remove
    </button>
  );
}
