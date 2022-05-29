import React from 'react'
import Card from './Card'
function Dashboard() {
  return (
   <div>
     <Card 
      card_icon = "Weekly Sales"
      card_exit = "15,000"
      body = "Increased by 60%"
     />
   </div>
  )
}

export default Dashboard