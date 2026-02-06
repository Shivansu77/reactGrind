import { useState } from "react";
import CurrentQueue from "./CurrentQueue";

const AddQueue = () => {
  const [category, setCategory] = useState("consultation");
  const [queueName, setQueueName] = useState("");
  const [currentQueue, setCurrentQueue] = useState([]);

  const handleQueue = () => {
    if (queueName.trim() === "") {
      alert("Please enter a queue name");
      return;
    }

    setCurrentQueue([
      ...currentQueue,
      { name: queueName, category: category, status: "Waiting" }
    ]);

    setQueueName("");
  };

  const handleRemoveQueue = (index) => {
    const updatedQueue = currentQueue.filter((_, i) => i !== index);
    setCurrentQueue(updatedQueue);
  };

  return (
    <div>
      <p>Add a new queue here</p>

      <input
        type="text"
        placeholder="Enter queue name"
        value={queueName}
        onChange={(e) => setQueueName(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="consultation">Consultation</option>
        <option value="payment">Payment</option>
        <option value="support">Support</option>
      </select>

      <button onClick={handleQueue}>Add Queue</button>

      <CurrentQueue
        currentQueue={currentQueue}
        onRemove={handleRemoveQueue}
      />
    </div>
  );
};

export default AddQueue;
