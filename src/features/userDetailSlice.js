import {createSlice , createAsyncThunk } from "@reduxjs/toolkit";
 
//create action 
export const createUser = createAsyncThunk( "createUser", async(data, {rejectWithValue}) => {
    console.log("data" , data);
      const Response= await fetch("https://6458c7b24eb3f674df7d1c0b.mockapi.io/crud", {
        method: "Post" ,
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      try{
        const result = await Response.json();
        return result;  
      } 
      catch (error){
        return rejectWithValue(error);

      }


    } );

//read action
 export const showUser = createAsyncThunk("showUser", async (_args, {rejectWithValue}) => {
const Response=  await fetch("https://6458c7b24eb3f674df7d1c0b.mockapi.io/crud");
try{
    const result = await Response.json();
    console.log(result);
    return result;  
  } 
  catch (error){
    return rejectWithValue(error);

  }
});


//delete action
export const deleteUser = createAsyncThunk("deleteUser", async (id, {rejectWithValue}) => {
  const Response=  await fetch('https://6458c7b24eb3f674df7d1c0b.mockapi.io/crud/${id}' ,{ method:"DELETE"});
  try{
      const result = await Response.json();
      console.log(result);
      return result;  
    } 
    catch (error){
      return rejectWithValue(error);
  
    }
  });


//update action 
export const updateDataUser = createAsyncThunk( "updateDataUser", async(data, {rejectWithValue}) => {
  console.log("updated data" , data);
    const Response= await fetch('https://6458c7b24eb3f674df7d1c0b.mockapi.io/crud/${data.id}', {
      method: "PUT" ,
      headers:{
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    try{
      const result = await Response.json();
      return result;  
    } 
    catch (error){
      return rejectWithValue(error);

    }


  } );


export const userDetail= createSlice({
    name:"userDetail",
    initialstate: {
        users: [],
        loading: false,
        error: null,
    },
        extraReducers : { 
            [createUser.pending] : (state) =>
            {
                state.loading =  true;
            },
            [createUser.fulfilled] : (state,action) =>
            {
                state.loading =  false;
                state.users.push(action.payload);
            },
            [createUser.rejected] : (state,action) =>
            {
                state.loading =  false;
                state.users = action.payload.message;
            },

            [showUser.pending] : (state) =>
            {
                state.loading =  true;
            },
            [showUser.fulfilled] : (state,action) =>
            {
                state.loading =  false;
                state.users = action.payload;
            },
            [showUser.rejected] : (state, action) =>
            {
                state.loading =  false;
                state.users = action.payload;
            },
            [deleteUser.pending] : (state) =>
            {
                state.loading =  true;
            },
            [deleteUser.fulfilled] : (state,action) =>
            {
                state.loading =  false;
                const{id} = action.payload;
                if(id)
                {
                  state.users = state.users.filter((user)=> user.id !== id)
                }
               console.log("delete action", action.payload);
            },
            [deleteUser.rejected] : (state, action) =>
            {
                state.loading =  false;
                state.users = action.payload;
            },

            [updateDataUser.pending] : (state) =>
            {
                state.loading =  true;
            },
            [updateDataUser.fulfilled] : (state,action) =>
            {
                state.loading =  false;
                // state.users = state.users.map((user) => {
                //   user.id === action.playload.id ? action.playload : user
                // });
            },
            [updateDataUser.rejected] : (state,action) =>
            {
                state.loading =  false;
                state.users = action.payload.message;
            },

        },
    
});

export default userDetail;