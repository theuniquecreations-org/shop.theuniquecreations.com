import React, { useState } from "react";

const AddFriend = ({ onAddFriend }) => {
  const [friendName, setFriendName] = useState("");
  const [friendEmail, setFriendEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (friendName.trim() === "" || friendEmail.trim() === "") {
      alert("Please provide both a name and an email.");
      return;
    }

    // Pass friend name and email back to the parent component
    onAddFriend({ name: friendName, email: friendEmail });
    setFriendName("");
    setFriendEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="grid px-0">
      <input type="text" placeholder="Friend's name" value={friendName} onChange={(e) => setFriendName(e.target.value)} required />
      <input type="email" placeholder="Friend's email" value={friendEmail} onChange={(e) => setFriendEmail(e.target.value)} required />
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default AddFriend;
