export const personalInputNames = ['fullName', 'email', 'phone'];

export default function PersonalInputs({ formData, handleChange }) {
  return (
    <>
      <label for="fullName">Full Name</label>
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
      ></input>
      <label for="email">Email</label>
      <input
        value={formData.email}
        id="email"
        name="email"
        placeholder="john@doe.com"
        required
        type="email"
        onChange={handleChange}
      ></input>
      <label for="phone">Phone</label>
      <input
        value={formData.phone}
        id="phone"
        name="phone"
        placeholder="+55(99)9999-9999"
        required
        type="tel"
        onChange={handleChange}
      ></input>
    </>
  );
}
