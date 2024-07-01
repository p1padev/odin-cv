export default function PreviewHeader({ personalInfo }) {
  return (
    <div className="preview-header">
      <h1 className="preview-name">{personalInfo.fullName}</h1>
      <div className="preview-contact">
        <h2>Contact</h2>
        <ul className="preview-list">
          <li>
            <span className="fw-600">Phone</span>:{' '}
            <a href={`tel:` + personalInfo.phone} className="preview-phone">
              {personalInfo.phone}
            </a>
          </li>
          <li>
            <span className="fw-600">Email</span>:{' '}
            <a href={`mailto:` + personalInfo.email} className="preview-email">
              {personalInfo.email}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
