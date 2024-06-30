import { useState } from 'react';
import '../styles/Dashboard.css';
import Accordion from './Accordion';
import Preview from './Preview';
import Spinner from './Spinner';

export default function Dashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'John Doe',
    email: 'john@doe.com',
    phone: '+55(99)999999999',
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
      <Accordion
        forms={availableForms}
        setEditing={setIsEditing}
        isEditing={isEditing}
      ></Accordion>
      {isEditing ? <Spinner></Spinner> : <Preview></Preview>}
    </div>
  );
}
