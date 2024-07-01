export const personalInputsDefault = {
  fullName: 'John Doe',
  email: 'john@doe.com',
  phone: '+55(99)99999',
};

export default function PersonalInputs({
  formState: [formData, setFormData],
  disabled,
}) {
  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <>
      <label htmlFor="fullName">Full Name</label>
      <input
        value={formData.fullName}
        id="fullName"
        name="fullName"
        placeholder="John Doe"
        required
        type="text"
        min="6"
        max="12"
        onChange={handleChange}
        disabled={disabled}
      ></input>
      <label htmlFor="email">Email</label>
      <input
        value={formData.email}
        id="email"
        name="email"
        placeholder="john@doe.com"
        required
        type="email"
        onChange={handleChange}
        disabled={disabled}
      ></input>
      <label htmlFor="phone">Phone</label>
      <input
        value={formData.phone}
        id="phone"
        name="phone"
        placeholder="+55(99)9999-9999"
        required
        type="tel"
        onChange={handleChange}
        disabled={disabled}
      ></input>
    </>
  );
}
