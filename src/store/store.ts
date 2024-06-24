import {combineReducers, createStore} from "redux"
import {bookReducer} from "./reducer/bookReducer"
const rootReducer = combineReducers({
    bookReducer
})
const store= createStore(rootReducer);
export default store;