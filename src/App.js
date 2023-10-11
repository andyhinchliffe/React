import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Title from "./components/Title"
import "./index.css";
import React from "react";
import Modal from "./components/Modal"
import Eventlist from "./components/Eventlist"



function App() {


  const [showModal, setShowModal] = useState (false)
 
const [showEvents, setShowEvents] =useState (true)


 const [events, setEvents] = useState ([
  {title :"Ghostbusters", id :1},
  {title :"Back To The Future", id :2},
  {title :"Jaws", id :3}
 ])

console.log(showModal)

  const handleClick = (id) => {

    
    setEvents ((prevEvents) => {

     return prevEvents.filter((event) => {

      

        return event.id !== id
        
      })
    })
    
  }

  const handleClose = () => {

    setShowModal (false)
  }


  


  return (

    
    <div className="App">
    <Title title ="Film List" subtitle="All the the films we want to watch"/>
      {!showEvents && (<>
        <button onClick={() => {setShowEvents(true)}}>Show</button>

        </>)}
        {showEvents && (<>
        <button onClick={() => {setShowEvents(false)}}>Hide</button>
        
      </>)}

      <button onClick={() => {setShowModal(true)}}>Show Modal</button>
      
      {showEvents && <Eventlist events = {events} handleClick={handleClick}/>}

     
      
      
      {showModal && <Modal handleClose={handleClose}>

        <h1>Info</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ut ipsum id tincidunt. Praesent a pharetra nisl, elementum auctor ante. Cras vitae suscipit tortor, eget finibus orci.</p>
      </Modal>}
    </div>
  );
}

export default App;
