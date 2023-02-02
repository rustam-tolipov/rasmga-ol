import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const Error = ({ errors }) => {
  const errorMessages = errors.split('.');

  console.log(errorMessages);

  return (
    <ul className='errors'>
      {errorMessages.map((errorMessage, index) => (
        <li key={index}>{errorMessage}</li>
      ))}
    </ul>
  );
};

export default Error;
