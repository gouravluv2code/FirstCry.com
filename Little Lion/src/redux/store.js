import {legacy_createStore,combineReducers,applyMiddleware} from "redux"

import {reducer as adminReducer} from "./AdminReducer/reducer"
<<<<<<<<< Temporary merge branch 1
=========
import {reducer as cartReducer} from "./CartReducer/reducer";
import {reducer as loginReducer} from "./LoginReducer/reducer";
>>>>>>>>> Temporary merge branch 2


import thunk from "redux-thunk"
const rootReducer = combineReducers({
    adminReducer,
<<<<<<<<< Temporary merge branch 1
=========
    cartReducer,
    loginReducer
>>>>>>>>> Temporary merge branch 2
})
    


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));