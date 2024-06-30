import { useState } from 'react';
import '../styles/Accordion.css';
import ClearFormButton from './ClearFormButton';
import Panel from './Panel';

export default function Accordion({ forms, isEditing, setEditing }) {
  const [openPanelId, setOpenPanelId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className="accordion">
      <ClearFormButton forms={forms}></ClearFormButton>
      {forms.map((form) => (
        <Panel
          form={form}
          isOpen={openPanelId === form.id}
          key={form.id}
          editing={[isEditing, setEditing]}
          error={[errorMessage, setErrorMessage]}
          onClick={() => {
            if (isEditing) {
              setErrorMessage('Please save the form before closing it.');
              return;
            }
            const isToggle = openPanelId === form.id;
            setErrorMessage('');
            setOpenPanelId(isToggle ? null : form.id);
          }}
        ></Panel>
      ))}
    </div>
  );
}
