import {legacy_createStore,combineReducers,applyMiddleware} from "redux"

import {reducer as adminReducer} from "./AdminReducer/reducer"
 
import {reducer as loginReducer} from "./LoginReducer/reducer";
import {reducer as adminAuth} from "./AdminAuth/reducer"


import thunk from "redux-thunk"
const rootReducer = combineReducers({
    adminReducer,
    loginReducer,
    adminAuth
})
    


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));