import React from 'react'
import AddQueue from './AddQueue'
import CurrentQueue from './CurrentQueue'
const Body = () => {
  return (
    <div>
        <h1>Queue Management System</h1>
        <h2>manage your customers efficiently</h2>
        <div style={{  display: "flex",
  flexDirection: "column"}}>
             <AddQueue />
        </div>
       
    </div>
  )
}

export default Body