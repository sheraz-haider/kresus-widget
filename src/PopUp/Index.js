import React, { useState } from 'react';
import Main from './Main/Main';
import Form from './Form/Form';

const Index = () => {
  const [step, setStep] = useState(0);
  return (
    <div className='overly-container'>
      <div className='modal'>
        <div className='modal-inner'>
          {step === 0 && <Main setStep={setStep} />}
          {step === 1 && <Form />}
        </div>
      </div>
    </div>
  );
};

export default Index;
