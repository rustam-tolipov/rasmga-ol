const Error = ({ errors }) => {
  const errorMessages = errors.split('.');
  return (
    <div className="errors">
      {errorMessages.map((errorMessage, index) => (
        <div key={index}>{errorMessage}</div>
      ))}
    </div>
  );
};

export default Error;
