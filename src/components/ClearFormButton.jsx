export default function ClearFormButton({ forms }) {
  const handleClick = () => {
    forms.forEach(({ handler }) => {
      handler((prev) => {
        const keys = Object.keys(prev);
        return Object.fromEntries(keys.map((key) => [key, '']));
      });
    });
  };

  return <button onClick={handleClick}>Clear Form</button>;
}
