import { useState } from "react";
import "./ReturnPage.css";

const ReturnPage = () => {
  const [reason, setReason] = useState("Too Small");

  return (
    <div className="return-page">
      {/* Steps for return */}
      <div className="step-container">
        <div className="step active-step">
          <button>1</button>
          <span className="label">Items to return</span>
        </div>
        <hr className="hr-line" />
        <div className="step">
          <button>2</button>
          <span className="label">Return Method</span>
        </div>
        <hr className="hr-line" />
        <div className="step">
          <button>3</button>
          <span className="label">Return Created</span>
        </div>
      </div>

      <h2>Select the items to Return</h2>
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
          <div className="summary-item">
            <p>1x HAVIT HV-G92 Gamepad</p>
            <p>₹650.00</p>
          </div>

          <hr />
          <div className="summary-refund">
            <p>Estimated refund value: </p>
            <p>₹650.00</p>
          </div>

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
