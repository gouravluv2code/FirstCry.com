import {legacy_createStore,combineReducers,applyMiddleware} from "redux"

import {reducer as productReducer} from "./ProductReducer/reducer"

import thunk from "redux-thunk"
const rootReducer = combineReducers({
   
    productReducer,
})
    


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));