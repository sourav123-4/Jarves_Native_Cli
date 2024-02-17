import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// const initialState = {
//   value: 0,
// };

const counterSlice = createSlice({
  name: 'counter',
  initialState: {value: 0},
  reducers: {
    incremented: state => {
      console.log('in increment reducer');
      state.value++;
    },
  },
});

export const {incremented} = counterSlice.actions;
export default counterSlice.reducer;
