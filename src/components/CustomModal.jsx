import React from 'react';
import "./customModal.css" ;
import { useSelector } from 'react-redux';

const CustomModal = ({ id, showPopup , setShowPopup}) => {
 
  const  users = useSelector ( (state) => state.app)
  const singleUser= users.filter((user) => user.id === id)
    console.log("singleuser" , singleUser);
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
           
           <button onClick={() => setShowPopup(false) }>
           close
           </button>
           <h2> {singleUser[0].name}</h2>
           <h2> {singleUser[0].email}</h2>
           <h2> {singleUser[0].phone}</h2>
           <h2> {singleUser[0].age}</h2>
           <h2> {singleUser[0].gender}</h2>
        </div>
      
    </div>
  )
}

export default CustomModal
