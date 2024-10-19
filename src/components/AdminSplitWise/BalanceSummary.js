import React, { useState, useEffect } from "react";

const BalanceSummary = ({ friends, onSettleUp, loggedInUser }) => {
  const [settleAmounts, setSettleAmounts] = useState({});
  const [totalPay, setTotalPay] = useState(0); // Total amount the user needs to pay
  const [totalReceive, setTotalReceive] = useState(0); // Total amount the user will receive

  // Calculate total pay and total receive for the logged-in user
  useEffect(() => {
    let pay = 0;
    let receive = 0;

    friends.forEach((friend) => {
      if (friend.balance < 0) {
        pay += Math.abs(friend.balance); // You owe money to the friend
      } else if (friend.balance > 0) {
        receive += friend.balance; // Friend owes you money
      }
    });

    setTotalPay(pay);
    setTotalReceive(receive);
  }, [friends]);

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
      <h5 className="mb-0">Balance Summary</h5>

      {/* Show the total amounts the logged-in user needs to pay or receive */}
      <div className="mb-4">
        <strong>Total you need to pay:</strong>
        <span className="text-danger">${totalPay.toFixed(2)}</span>
        <br />
        <strong>Total you will receive:</strong> <span className="text-success">${totalReceive.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default BalanceSummary;
