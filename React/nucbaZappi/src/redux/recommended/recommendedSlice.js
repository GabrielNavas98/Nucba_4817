import { createSlice } from "@reduxjs/toolkit";
import { pickRandomProducts } from "../../utils/pickRandomProducts";

const INITIAL_STATE = {
    recommended: pickRandomProducts(4)
}


export const recommendedSlice = createSlice({
    name: 'recommended',
    initialState: INITIAL_STATE,
    reducers:{
        getRecommended: state => {
            return state
        }
    }
})

export const {getRecommended} = recommendedSlice.actions
export default recommendedSlice.reducer