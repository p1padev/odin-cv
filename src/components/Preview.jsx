import '../styles/Preview.css';
import PreviewHeader from './PreviewHeader';

export default function Preview({ personalInfo }) {
  return (
    <div className="preview">
      <div className="preview-sheet">
        <PreviewHeader personalInfo={personalInfo}></PreviewHeader>
      </div>
    </div>
  );
}
