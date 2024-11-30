
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commonReducer from "./Redux/Slices/Common_slice"

const reducers = combineReducers({
    commonState:commonReducer,

})

const store = configureStore({
    reducer:reducers
})

export default store