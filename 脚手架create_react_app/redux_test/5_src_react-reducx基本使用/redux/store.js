// 该文件用于专门暴露一个store对象，整个应用只有一个store对象

import { createStore, applyMiddleware } from "redux";
import countReducer from './count_reducer'
import thunk from "redux-thunk";

// 暴露store
export default createStore(countReducer,applyMiddleware(thunk))