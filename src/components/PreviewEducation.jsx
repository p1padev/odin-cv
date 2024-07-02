export default function PreviewEducation({ educationInfo }) {
  return (
    <article className="preview-education preview-container">
      <h2 className="preview-title">Education</h2>
      {educationInfo.map((field) => (
        <article
          className="preview-education_field preview-field"
          key={field.id}
        >
          <div>
            <h3 className="preview-education_course preview-field_title">
              {field.courseTitle}
            </h3>
            <h4 className="preview-education_school preview-field_subtitle">
              {field.schoolName}
            </h4>
          </div>
          <p className="preview-education_date preview-field_date">
            <span className="preview-education_year preview-field_year">
              {field.yearStart}
            </span>{' '}
            <br></br>
            <span className="preview-education_year preview-field_year">
              {field.yearEnd}
            </span>{' '}
          </p>
        </article>
      ))}
    </article>
  );
}
