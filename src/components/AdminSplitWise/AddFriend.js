import React, { useState } from "react";

const AddFriend = ({ onAddFriend }) => {
  const [friendName, setFriendName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (friendName.trim() === "") return;
    onAddFriend(friendName);
    setFriendName("");
  };

  return (
    <form onSubmit={handleSubmit} className="grid px-0">
      <input type="text" placeholder="Friend's name" value={friendName} onChange={(e) => setFriendName(e.target.value)} />
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default AddFriend;
