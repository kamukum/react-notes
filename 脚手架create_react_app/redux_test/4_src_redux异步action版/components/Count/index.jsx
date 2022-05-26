import React, { Component } from 'react'

import store from '../../redux/store'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'

export default class Count extends Component {

  /* componentDidMount() {
    // 检测redux中状态的变化，只要变化，就调用render
    store.subscribe(() => {
      this.setState({})
    })
  } */


  increment = () => {
    const { value } = this.selectNumber
    // 通知redux加value
    store.dispatch(createIncrementAction(value * 1))
  }

  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value * 1))
  }

  incrementOdd = () => {
    const { value } = this.selectNumber
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1))
    }

  }

  incrementAsync = () => {
    const { value } = this.selectNumber
    // setTimeout(() => {
      store.dispatch(createIncrementAsyncAction(value * 1, 500))
    // }, 500);
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;&nbsp;
      </div>
    )
  }
}
