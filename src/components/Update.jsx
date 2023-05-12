import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { updateDataUser } from '../features/userDetailSlice';

const Update = () => {
  const dispatch = useDispatch ();
  const {id}= useParams();

  const[ updateData, setUpdateData] = useState();

  const  users = useSelector ( (state) => state.app);
  
      
useEffect(() => {

    if(id){
        const singleUser= users.filter((user) => user.id === id);
        setUpdateData (singleUser[0]);
    }
},[]);

const newData = (e) => 
{
  setUpdateData({...updateData , [e.target] : e.target.value})
}

console.log(updateData);

const handleUpdate = (e) => {
  e.preventDefault();
  dispatch(updateDataUser (updateData));
  Navigate( "/read");

}

  return (
    <div>
    <h2 className="my 2">Edit the data</h2>
   
    <form  className="w-100 mx-auto"   onSubmit={handleUpdate}>
      <div class="mb-3">
        <label class="form-label"> Name</label>
        <input
          type="text"
          name="name"
          placeholder=" name"
          class="form-control"
          value={updateData && updateData[0].name}
          onChange={newData}
        />
      </div>
      <div  class="mb-3">
      <label class="form-label"> Email</label>
        <input
          type="email"
          name="email"
          placeholder=" email"
          class="form-control"
          value={updateData && updateData[0].email}
          onChange={newData}
          required
        />
      </div>
      <div  class="mb-3">
      <label class="form-label"> Phone</label>
        <input
          type="number"
          name="phone"
          placeholder="phone number"
          class="form-control"
          value={updateData && updateData[0].phone}
          onChange={newData}
          required
        />
      </div>
      <div  class="mb-3">
      <label class="form-label"> Age</label>
        <input
          type="number"
          name="age"
          placeholder="age"
          class="form-control"
          value={updateData && updateData[0].age}
        onChange={newData}
          required
        />
      </div>
      <div  class="mb-3">
     
        <input
          type="radio"
          name="gender"
          class="form-control"
         
          value="Male"
          checked={updateData && updateData[0].gender === 'Male'}
          onChange={newData}
          required
        />
        <label>Male</label>
        <input
          type="radio"
          name="gender"
          class="form-control"
        
          value="Female"
          checked={updateData && updateData[0].gender === 'Female'}
          onChange={newData}
          required
        />
        <label>Famale</label>
        <input
          type="radio"
          name="gender"
          class="form-control"
         
          value="other"
          checked={updateData && updateData[0].gender === 'Other'}
          onChange={newData}
          required
        />
        <label>Other</label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
  )
}

export default Update
