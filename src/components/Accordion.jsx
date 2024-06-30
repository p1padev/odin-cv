import { useState } from 'react';
import '../styles/Accordion.css';
import Panel from './Panel';

export default function Accordion({ forms, isEditing, setEditing }) {
  const [openPanelId, setOpenPanelId] = useState(null);

  return (
    <div className="accordion">
      {forms.map((form) => (
        <Panel
          form={form}
          isOpen={openPanelId === form.id}
          key={form.id}
          editing={[isEditing, setEditing]}
          onClick={() => {
            if (isEditing) {
              return;
            }
            const isToggle = openPanelId === form.id;
            setOpenPanelId(isToggle ? null : form.id);
            setEditing(isToggle ? false : true);
          }}
        ></Panel>
      ))}
    </div>
  );
}
