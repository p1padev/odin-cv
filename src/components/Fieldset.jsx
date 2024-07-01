export default function Fieldset({
  className,
  disabled,
  setErrorMessage,
  children,
}) {
  const handleFieldsetClick = () => {
    if (disabled) {
      setErrorMessage(
        'Please toggle edit mode before trying to make a change.'
      );
    }
  };

  return (
    <fieldset
      className={className}
      disabled={disabled}
      onClick={handleFieldsetClick}
    >
      {children}
    </fieldset>
  );
}
