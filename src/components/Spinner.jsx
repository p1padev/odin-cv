import '../styles/Spinner.css';

export default function Spinner() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <span>Currently editing...</span>
    </div>
  );
}
