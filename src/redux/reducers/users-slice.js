import { createSlice } from "@reduxjs/toolkit";
import USERSLIST from "../../data/usersData";



const usersSlice = createSlice({
    name:"users",
    initialState:{
        usersList:USERSLIST
    },
    reducers:{
        addUser(state,action){
            state.usersList.unshift({
                id:state.usersList.length+1,
                first_name:action.payload.first_name,
                last_name:action.payload.last_name,
                contact_number:action.payload.contact_number,
                sessions:action.payload.sessions,
            })
        },
        deleteUser(state,action){
            const id = action.payload.id;
            const existingItem = state.usersList.find((user)=>user.id ===id);
            
            if(existingItem){
                state.usersList = state.usersList.filter((user)=>user.id !== existingItem.id);
            }
        },
        updateUser(state,action){
            const id = action.payload.id;
            const existingItemIndex = state.usersList.findIndex((user)=>user.id == id);
            state.usersList[existingItemIndex].first_name = action.payload.first_name;
            state.usersList[existingItemIndex].last_name = action.payload.last_name;
            state.usersList[existingItemIndex].contact_number = action.payload.contact_number;
            state.usersList[existingItemIndex].sessions = action.payload.sessions;
        }
    }
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;