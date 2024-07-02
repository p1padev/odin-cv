import { useState } from 'react';
import '../styles/Accordion.css';
import ClearFormButton from './ClearFormButton';
import Panel from './Panel';

export default function Accordion({ forms, editingState, setErrorMessage }) {
  const [openPanelId, setOpenPanelId] = useState(null);
  const [isEditing] = editingState;
  const handlePanelClick = (form) => {
    if (isEditing) {
      setErrorMessage('Please save the form before closing it.');
      return;
    }
    const isToggle = openPanelId === form.id;
    setErrorMessage('');
    setOpenPanelId(isToggle ? null : form.id);
  };

  return (
    <div className="accordion">
      <ClearFormButton forms={forms}></ClearFormButton>
      {forms.map((form) => (
        <Panel
          form={form}
          isOpen={openPanelId === form.id}
          key={form.id}
          editingState={editingState}
          onClick={() => handlePanelClick(form)}
          setErrorMessage={setErrorMessage}
        ></Panel>
      ))}
    </div>
  );
}
