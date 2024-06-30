import '../styles/Panel.css';
import Form from './Form';

export default function Panel({
  form,
  isOpen,
  onClick,
  editing,
  error: [errorMessage, setErrorMessage],
}) {
  return (
    <section className={'panel-container' + (isOpen ? ' active' : '')}>
      <button onClick={onClick} className="panel-button">
        {form.title}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <Form
          title={form.title}
          formData={form.state}
          setFormData={form.handler}
          editing={editing}
        >
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </Form>
      )}
    </section>
  );
}
