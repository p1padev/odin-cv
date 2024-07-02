import { useState } from 'react';
import '../styles/Dashboard.css';
import Accordion from './Accordion';
import { educationInputsDefault } from './EducationInputs';
import { personalInputsDefault } from './PersonalInputs';
import Preview from './Preview';
import Spinner from './Spinner';
import { workInputsDefault } from './WorkInputs';

export default function Dashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    ...personalInputsDefault,
  });
  const [educationInfo, setEducationInfo] = useState([educationInputsDefault]);
  const [workInfo, setWorkInfo] = useState([workInputsDefault]);
  const availableForms = [
    {
      title: 'Personal',
      state: personalInfo,
      handler: setPersonalInfo,
      id: 0,
    },
    {
      title: 'Education',
      state: educationInfo,
      handler: setEducationInfo,
      id: 1,
    },
    {
      title: 'Work',
      state: workInfo,
      handler: setWorkInfo,
      id: 2,
    },
  ];

  return (
    <div className="dashboard">
      <Accordion
        forms={availableForms}
        editingState={[isEditing, setIsEditing]}
      ></Accordion>
      {isEditing ? (
        <Spinner></Spinner>
      ) : (
        <Preview
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          workInfo={workInfo}
        ></Preview>
      )}
    </div>
  );
}
