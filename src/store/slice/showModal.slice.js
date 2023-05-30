import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const mySlice = createSlice({
	name: 'showModal',
    initialState: false,
    reducers: {
        setShowModal: (state, action) => {
            return action.payload
        }
    }
})

export const { setShowModal } = mySlice.actions;

export default mySlice.reducer;