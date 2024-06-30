import { useState } from 'react';
import '../styles/Dashboard.css';
import Accordion from './Accordion';
import Preview from './Preview';

export default function Dashboard() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [workInfo, setWorkInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});

  const availableFields = [
    {
      title: 'Personal',
      state: personalInfo,
      handler: setPersonalInfo,
      id: 1,
    },
    {
      title: 'Work',
      state: workInfo,
      handler: setWorkInfo,
      id: 2,
    },
    {
      title: 'Education',
      state: educationInfo,
      handler: setEducationInfo,
      id: 3,
    },
  ];

  return (
    <div className="dashboard">
      <Accordion fields={availableFields}></Accordion>
      <Preview></Preview>
    </div>
  );
}
