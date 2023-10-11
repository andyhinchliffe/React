import React from 'react'

export default function EventList({events, handleClick}) {
  
  
    return (

        <div>
    
    {events.map ((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{event.id} - {event.title}</h2>
          
          
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
          
          
        </React.Fragment>
        
        
        
        ))
    }
    </div>     
  )
}
