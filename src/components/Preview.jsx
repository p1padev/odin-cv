import '../styles/Preview.css';
import PreviewEducation from './PreviewEducation';
import PreviewHeader from './PreviewHeader';
import PreviewWork from './PreviewWork';

export default function Preview({ personalInfo, educationInfo, workInfo }) {
  return (
    <div className="preview">
      <div className="preview-sheet">
        <PreviewHeader personalInfo={personalInfo}></PreviewHeader>
        <PreviewEducation educationInfo={educationInfo}></PreviewEducation>
        <PreviewWork workInfo={workInfo}></PreviewWork>
      </div>
    </div>
  );
}
