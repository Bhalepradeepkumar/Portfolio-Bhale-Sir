import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sideListVar: 0,
    topListVar: 0
}

const researchSlice = createSlice({
    name: 'research',
    initialState,
    reducers: {
        setSideList: (state, value) => {
            state.sideListVar = value
        },
        setTopList: (state, value) => {
            state.topListVar = value
        }
    }
});

export const { setSideList,setTopList } = researchSlice.actions
export default researchSlice.reducer