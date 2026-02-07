import { useState } from 'react'
import {FaUserPlus} from 'react-icons/fa'
const QueueForm = ({ onAdd }) => {
    const [name,setName] = useState('');
    const [service,setService] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name.trim() || !service.trim()){
            alert('Please fill in all fields');
            return;
        }
        onAdd({ name, service, status: 'Waiting' });
        setName('');
        setService('');
    }
    console.log(name,service);
  return (
    <div>
        <form className="queue-form" onSubmit={handleSubmit}>
            <input type="text" placeholder='Customer Name' value={name} onChange={(e)=>setName(e.target.value)} />
            <select value={service} onChange={(e)=>setService(e.target.value)}>
                <option value="">Select Service</option>
                <option value="Service A">Service A</option>
                <option value="Service B">Service B</option>
                <option value="Service C">Service C</option>
            </select>
            <button type='submit'><FaUserPlus /> Add to Queue</button>
        </form>
    </div>
  )
}

export default QueueForm