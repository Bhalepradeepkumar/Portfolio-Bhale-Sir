import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActive: 0
}

const activeSlice = createSlice({
    name: 'active',
    initialState,
    reducers: {
        setVisibility: (state, value) => {
            state.isActive = value
        },
    }
});

export const { setVisibility } = activeSlice.actions
export default activeSlice.reducer