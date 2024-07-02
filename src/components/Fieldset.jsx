export default function Fieldset({ className, disabled, children }) {
  return (
    <fieldset className={className} disabled={disabled}>
      {children}
    </fieldset>
  );
}
