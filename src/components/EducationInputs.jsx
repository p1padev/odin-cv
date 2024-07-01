export const EducationInputsDefault = {
  schoolName: 'University of Santa Catarina',
  courseTitle: 'Bachelor in Computer Science',
  yearStart: '2016',
  yearEnd: '2020',
};

const boilerplateInput = Object.fromEntries(
  Object.keys(EducationInputsDefault).map((key) => [key, ''])
);

export default function EducationInputs({ handleChange, formData, disabled }) {
  const handleCreateInputs = () => {};
  return <div>Test</div>;
}
