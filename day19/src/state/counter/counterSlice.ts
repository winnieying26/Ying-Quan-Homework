import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;

}

const initialState: CounterState ={
    value: 0
}

const counterSLice = createSlice({
   name: "counter",
   initialState,
   reducers: {
    increment: (state) => {
        state.value += 1;
    },
    decrement: (state) =>{
        state.value -=1;
    },
    reset: (state) =>{
        state.value = 0
    }, 
    incrementByAmount: (state, action: PayloadAction<number>) =>{
        state.value += action.payload
    }
     },

     extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, ()=>{
            console.log("incrementAsync.pending")
        })
        .addCase(incrementAsync.fulfilled,
            (state, action: PayloadAction<number>) =>{
            state.value += action.payload;
        });

     }
}
)

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number)=>{
        await new Promise((resolve) => setTimeout(resolve,1000));
        return amount
    }
)
export const {increment, decrement, reset, incrementByAmount} = counterSLice.actions;

export default counterSLice.reducer;