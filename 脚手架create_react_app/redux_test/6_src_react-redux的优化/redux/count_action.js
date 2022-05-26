/* 
  该文件专门为Count组件生成action对象
*/

import {INCREMENT, DECREMENT} from './constant'

// 同步action，指的是action的值为Object类型的一般对象。
export const createIncrementAction = data => ({type:INCREMENT, data})
export const createDecrementAction = data  => {
  return {type:DECREMENT, data}
}

// 异步action，指的是action的值为函数,异步action中一般都会调用同步action
export const createIncrementAsyncAction = (data, wait) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, wait)
  }
}