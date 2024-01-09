import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface User {
  id: string,
  email: string,
  listfriends: [
    {
      friend: {
        id: string,
        name: string,
        email: string,
        createAt: string
      },
      room: string
    }
  ]
}

interface State {
  value: User | null
}

const initialState: State = {
  value: null,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getUser } = userSlice.actions

export default userSlice.reducer