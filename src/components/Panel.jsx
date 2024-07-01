import '../styles/Panel.css';
import Form from './Form';

export default function Panel({
  form,
  isOpen,
  onClick,
  editingState,
  errorState,
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
          formState={[form.state, form.handler]}
          editingState={editingState}
          errorState={errorState}
        ></Form>
      )}
    </section>
  );
}
