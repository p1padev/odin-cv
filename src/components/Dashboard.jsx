import { useState } from 'react';
import createEmptyState from '../formHelper';
import '../styles/Dashboard.css';
import Accordion from './Accordion';
import { personalInputNames } from './PersonalInputs';
import Preview from './Preview';

export default function Dashboard() {
  const [personalInfo, setPersonalInfo] = useState({
    ...createEmptyState(personalInputNames),
  });
  const [workInfo, setWorkInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  const availableForms = [
    {
      title: 'Personal',
      state: personalInfo,
      handler: setPersonalInfo,
      id: 0,
    },
    {
      title: 'Work',
      state: workInfo,
      handler: setWorkInfo,
      id: 1,
    },
    {
      title: 'Education',
      state: educationInfo,
      handler: setEducationInfo,
      id: 2,
    },
  ];

  return (
    <div className="dashboard">
      <Accordion forms={availableForms}></Accordion>
      <Preview></Preview>
    </div>
  );
}
