export default function PreviewWork({ workInfo }) {
  return (
    <article className="preview-work preview-container">
      <h2 className="preview-title">Work</h2>
      {workInfo.map((field) => (
        <article className="preview-work_field" key={field.id}>
          <div className="preview-field">
            <div>
              <h3 className="preview-work_course preview-field_title">
                {field.companyName}
              </h3>
              <h4 className="preview-work_school preview-field_subtitle">
                {field.positionTitle}
              </h4>
            </div>
            <p className="preview-work_date preview-field_date">
              <span className="preview-work_year preview-field_year">
                {field.yearStart}
              </span>{' '}
              <br></br>
              <span className="preview-work_year preview-field_year">
                {field.yearEnd}
              </span>{' '}
            </p>
          </div>
          <div className="preview-work_description">
            <h3 className="preview-work_description-title">Job description:</h3>
            <p className="preview-work_description-text">{field.description}</p>
          </div>
        </article>
      ))}
    </article>
  );
}
