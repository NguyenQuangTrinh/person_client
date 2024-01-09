import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface User{
   id: string,
   email: string,
   name: string
   listfriends: [
      friend: {
        id: string,
        name: string,
        email: string,
        createAt: string
      },
      room: string
   ]
}

interface State {
  value: User | null
}

const initialState: State = {
  value: null,
}

export const currentUserSlice = createSlice({
  name: 'currentUserSlice',
  initialState,
  reducers: {
    getCurrentUser: (state, action: PayloadAction<User>) => {
        state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getCurrentUser } = currentUserSlice.actions

export default currentUserSlice.reducer