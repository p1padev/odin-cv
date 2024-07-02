import '../styles/Preview.css';
import PreviewEducation from './PreviewEducation';
import PreviewHeader from './PreviewHeader';

export default function Preview({ personalInfo, educationInfo, workInfo }) {
  return (
    <div className="preview">
      <div className="preview-sheet">
        <PreviewHeader personalInfo={personalInfo}></PreviewHeader>
        <PreviewEducation educationInfo={educationInfo}></PreviewEducation>
      </div>
    </div>
  );
}
