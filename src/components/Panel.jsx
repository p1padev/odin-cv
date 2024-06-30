import '../styles/Panel.css';

export default function Panel({ title, isOpen, children }) {
  return (
    <section className={'panel-container' + (isOpen ? ' active' : '')}>
      <button className="panel-button">
        {title}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <div className="panel-inputs">{children}</div>}
    </section>
  );
}
