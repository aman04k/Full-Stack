// import React from 'react';
import './Stepper.css'; // Ensure the CSS is linked

const Stepper = () => {
  return (
    <div className="stepper-container">
      <div className="stepper">
        {/* Step 1 */}
        <div className="step active">
          <div className="circle">1</div>
          <p>Items to return</p>
        </div>

        <hr className="line" />

        {/* Step 2 */}
        <div className="step">
          <div className="circle">2</div>
          <p>Return Method</p>
        </div>

        <hr className="line" />

        {/* Step 3 */}
        <div className="step">
          <div className="circle">3</div>
          <p>Return Created</p>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
