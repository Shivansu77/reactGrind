const CurrentQueue = ({ currentQueue, onRemove }) => {
  return (
    <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
      {currentQueue.length === 0 ? (
        <p>No queues available</p>
      ) : (
        currentQueue.map((queue, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              marginBottom: "10px",
              padding: "10px"
            }}
          >
            <p>Queue Name: {queue.name}</p>
            <p>Category: {queue.category}</p>
            <p style={{ color: "orange" }}>
              Status: {queue.status}
            </p>

            <button onClick={() => console.log("serve")}>Serve</button>
            <button onClick={() => onRemove(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CurrentQueue;
