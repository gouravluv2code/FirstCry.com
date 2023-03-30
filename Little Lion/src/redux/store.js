import {legacy_createStore,combineReducers,applyMiddleware} from "redux"

import {reducer as adminReducer} from "./AdminReducer/reducer"
import {reducer as cartReducer} from "./CartReducer/reducer"


import thunk from "redux-thunk"
const rootReducer = combineReducers({
    adminReducer,
    cartReducer
})
    


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));