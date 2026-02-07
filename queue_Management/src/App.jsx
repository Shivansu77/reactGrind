import React from 'react'
import { useState } from 'react'
import './App.css'
import QueueForm from './components/QueueForm';
import QueueDisplay from './components/QueueDisplay';

const App = () => {
  const [queue, setQueue] = useState([]);
  const addToQueue = (customer)=>{
    setQueue([...queue, { ...customer, id: Date.now() }]);
  }

  const updateStatus = (id,newStatus)=>{
      setQueue(queue.map(customer => customer.id === id ? { ...customer, status: newStatus } : customer));
  }

  const removeFromQueue = (id)=>{
      setQueue(queue.filter(customer => customer.id !== id));
  }
  return (
    <div className='app'>
      <header className="header">
        <h1>Queue Management System</h1>
        <p>Manage your customers efficiently</p>
      </header>
      <main className="main">
          <QueueForm onAdd={addToQueue} />
          <QueueDisplay queue={queue} onUpdateStatus={updateStatus} onRemove={removeFromQueue} />
        </main>
    </div>

  )
}

export default App