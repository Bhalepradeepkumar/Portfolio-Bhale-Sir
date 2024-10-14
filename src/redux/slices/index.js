import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    index: 0
}

const indexSlice = createSlice({
    name: 'index',
    initialState,
    reducers: {
        setIndex: (state, value) => {
            state.index = value
        },
    }
});

export const { setIndex } = indexSlice.actions
export default indexSlice.reducer;