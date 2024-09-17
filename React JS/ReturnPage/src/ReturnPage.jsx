import { useState } from "react";
import "./ReturnPage.css"; // Ensure to link the correct CSS file

const ReturnPage = () => {
  const [reason, setReason] = useState("Too Small");

  return (
    <div className="return-page">
      {/* Steps for return */}
      <div className="steps">
        <span className="step active">1 Items to return</span>
        <span className="step">2 Return Method</span>
        <span className="step">3 Return Created</span>
      </div>

      <h2>Select the items to Return</h2>
      <hr />
      <p>Tick the items you want to return and select the reason(s) for return</p>

      {/* Item Card */}
      <div className="item-card">
        <input type="checkbox" checked readOnly />
        <div className="item-details">
          <img src="/images.png" alt="Gamepad" />
          <div className="details-text">
            <p><strong>HAVIT HV-G92 Gamepad</strong></p>
            <p>Color: Clear</p>
            <p>Size: M</p>
            <p>Qty: 1</p>
            <p>Total cost: ₹650</p>
          </div>
        </div>

        <div className="return-info">
          <div className="return-days">
            <img src="/Replace.png" alt="Return" />
            <p><span>35 days</span> Left to return</p>
          </div>

          <label htmlFor="reason-select">Reason for return *</label>
          <select
            id="reason-select"
            className="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          >
            <option value="Too Small">Too Small</option>
            <option value="Too Large">Too Large</option>
            <option value="Defective">Defective</option>
            <option value="Wrong Item">Wrong Item</option>
          </select>
        </div>
      </div>

      {/* Return Summary */}
      <div className="return-summary-container">
        <div className="return-summary">
          <h3>Return summary</h3>
          <p>1x HAVIT HV-G92 Gamepad</p>
          <p>₹650.00</p>
          <hr />
          <p>Estimated refund value: ₹650.00</p>
          <p>Mastercard****1234</p>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button className="back-button">Back to order list</button>
          <button className="create-return-button">Create return</button>
        </div>
      </div>
    </div>
  );
};

export default ReturnPage;
