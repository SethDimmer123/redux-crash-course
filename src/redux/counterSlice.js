// this is how to create a slice

import { createSlice } from '@reduxjs/toolkit' //1. importing function called create slice

const initialState = {// 2. create my state
  count: 0,
  //i can change value to count to stay consistent but do not have to
}

// 3.exploring variable called counter slice which is equal to the create slice function
// and exporting it so i can access it in other components.

export const counterSlice = createSlice({// 4. this createSlice function takes in an object
    // 5 .the object takes in a bunch of properties
  name: 'counter',   // 6. name just indifies my slice                     
  initialState,// 7. contains my initialState which is also on line 5
  reducers: {// 8. the reducers property is an object whcih contains my functions to change my state.

    increment: (state) => {//initialState object line 5 
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
      // from the state object i go to the count property add 1
    },
    decrement: (state) => {
// from the state object i go to the count property subtract 1
    state.count -= 1
},
    incrementByAmount: (state, action) => {
      state.count += action.payload// this payload property i am passing in my function is how much i want to increment by 
    },
  },
})

// the functions from line 19 to 31 are called actions

// BELOW I AM exporting the increment,decrement,anf incrementByAmount to use them anywhere in my app.

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer