import { useState } from 'react';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [workInfo, setWorkInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});

  const availableFields = [
    {
      title: 'Personal',
      state: personalInfo,
      handler: setPersonalInfo,
    },
    {
      title: 'Work',
      state: workInfo,
      handler: setWorkInfo,
    },
    {
      title: 'Education',
      state: educationInfo,
      handler: setEducationInfo,
    },
  ];

  return <div className="dashboard"></div>;
}
