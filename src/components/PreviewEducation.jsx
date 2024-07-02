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
            <h3 className="preview-education_course">{field.courseTitle}</h3>
            <h4 className="preview-education_school">{field.schoolName}</h4>
          </div>
          <p className="preview-education_date">
            <span className="preview-education_year">{field.yearStart}</span>{' '}
            <br></br>
            <span className="preview-education_year">{field.yearEnd}</span>{' '}
          </p>
        </article>
      ))}
    </article>
  );
}
