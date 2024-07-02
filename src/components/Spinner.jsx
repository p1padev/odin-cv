import '../styles/Spinner.css';

export default function Spinner({ errorMessage }) {
  return (
    <div className="spinner-error-container">
      <div className="spinner-container">
        <div className="spinner"></div>
        <span>Currently editing...</span>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
