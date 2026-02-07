import React from 'react'

const QueueDisplay = ({queue, onUpdateStatus, onRemove}) => {
    function getStatusColor(status){
        switch(status){
            case 'waiting':
                return 'var(--warning-color)';
            case 'in-service':
                return 'var(--in-service-color)';
            case 'completed':
                return 'var(--completed-color)';
            default:
                return 'var(--waiting-color)';
        }
    }
  return (
    <div>
        <h2>current Queue</h2>
        {queue.length === 0 ? (
            <p>No customers in queue</p>
        ) : (
            <ul className="queue-list">
                {queue.map((customer, index) => (
                    <li key={customer.id} style={{ color: getStatusColor(customer.status) }}>
                        {customer.name} - {customer.service} - {customer.status}
                        <button onClick={() => onUpdateStatus(customer.id, 'in-service')}>In Service</button>
                        <button onClick={() => onUpdateStatus(customer.id, 'completed')}>Completed</button>
                        <button onClick={() => onRemove(customer.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default QueueDisplay