import { useState } from 'react';
import '../styles/Accordion.css';
import Panel from './Panel';

export default function Accordion({ fields }) {
  const [openPanelId, setOpenPanelId] = useState(null);
  const handlePanelClick = () => {};

  return (
    <div className="accordion">
      {fields.map((field) => (
        <Panel
          title={field.title}
          isOpen={openPanelId === field.id}
          key={field.id}
        >
          <h3>Test</h3>
        </Panel>
      ))}
    </div>
  );
}
