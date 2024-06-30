import { useState } from 'react';
import '../styles/Accordion.css';
import Panel from './Panel';

export default function Accordion({ forms }) {
  const [openPanelId, setOpenPanelId] = useState(null);

  return (
    <div className="accordion">
      {forms.map((form) => (
        <Panel
          form={form}
          isOpen={openPanelId === form.id}
          key={form.id}
          onClick={() => {
            setOpenPanelId(openPanelId === form.id ? null : form.id);
          }}
        ></Panel>
      ))}
    </div>
  );
}
