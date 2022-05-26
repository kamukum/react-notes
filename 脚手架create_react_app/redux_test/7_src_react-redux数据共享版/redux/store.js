// 该文件用于专门暴露一个store对象，整个应用只有一个store对象

import { createStore, applyMiddleware, combineReducers} from "redux";
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from "redux-thunk";

const allReducer = combineReducers({
  he:countReducer,
  rens:personReducer,
})

// 暴露store
export default createStore(allReducer,applyMiddleware(thunk))