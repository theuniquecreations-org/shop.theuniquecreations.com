import React, { useState } from "react";

const BalanceSummary = ({ friends, onSettleUp }) => {
  const [settleAmounts, setSettleAmounts] = useState({});

  // Handle input change for the partial settle-up amount
  const handleSettleAmountChange = (e, friendName) => {
    const { value } = e.target;
    setSettleAmounts({
      ...settleAmounts,
      [friendName]: value,
    });
  };

  // Handle Settle Up click
  const handleSettleUpClick = (friendName) => {
    const settleAmount = parseFloat(settleAmounts[friendName] || 0);
    if (!isNaN(settleAmount) && settleAmount > 0) {
      onSettleUp(friendName, settleAmount); // Send the settlement amount
      setSettleAmounts({ ...settleAmounts, [friendName]: "" }); // Clear input after settling
    }
  };

  return (
    <div>
      <h5>Balance Summary</h5>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>
            <span
              style={{
                color: friend.balance < 0 ? "red" : "green",
                fontWeight: "normal",
              }}
            >
              {friend.name}: {friend.balance < 0 ? `You need to pay $${Math.abs(friend.balance).toFixed(2)}` : `You will receive $${Math.abs(friend.balance).toFixed(2)}`}
            </span>
            {friend.balance !== 0 && (
              <>
                {/* Input field for partial settlement */}
                <input type="number" value={settleAmounts[friend.name] || ""} onChange={(e) => handleSettleAmountChange(e, friend.name)} placeholder="Enter amount" min="0" className="mx-2 border rounded px-2" />
                <button className="px-2" onClick={() => handleSettleUpClick(friend.name)}>
                  Settle Up
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BalanceSummary;
