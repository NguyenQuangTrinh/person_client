import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Message{
    id: string,
    userId: string,
    content: string,
    messagerId: string,
    createAt: string
}

export interface CounterState {
  value: Message[]
}

const initialState: CounterState = {
  value: [],
}

export const messageSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getAllMessage(state, action: PayloadAction<Message[]>){
        state.value = action.payload;
    },
    addNewMessage(state, action: PayloadAction<Message>){
        state.value.push(action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { getAllMessage, addNewMessage } = messageSlice.actions

export default messageSlice.reducer