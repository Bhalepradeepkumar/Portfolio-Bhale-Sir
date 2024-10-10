import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isVisibility: 0
}

const timelineSlice = createSlice({
    name: 'timeline',
    initialState,
    reducers: {
        setVisibility: (state, value) => {
            state.isVisibility = 1
        },
    }
});

export const { setVisibility } = timelineSlice.actions
export default timelineSlice.reducer