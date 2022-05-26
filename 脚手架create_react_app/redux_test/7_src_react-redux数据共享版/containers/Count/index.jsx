import React, { Component } from 'react'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/actions/count'

class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber
    this.props.jia(value*1)
  }

  decrement = () => {
    const { value } = this.selectNumber
    this.props.jian(value*1)
  }

  incrementOdd = () => {
    const { value } = this.selectNumber
    if(this.props.count % 2 !== 0){
      this.props.jia(value*1)
    }
  }

  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.jiaAsync(value*1,500)
  }

  render() {
    return (
      <div>
        <h2>我是Count组件</h2>
        <h4>当前求和为：{this.props.count},下方组件总人数为：{this.props.renshu}</h4>
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

// 创建并暴露一个Count的容器组件
export default connect(
  state => ({ count: state.he, renshu:state.rens.length }),

  // mapDispatchToProps的一般写法
  // dispatch => ({
  //     jia: number => dispatch(createIncrementAction(number)),
  //     jian: number => dispatch(createDecrementAction(number)),
  //     jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
  //   })

  // mapDispatchToProps的简写
  {
    jia: number => createIncrementAction(number),
    jian: number => createDecrementAction(number),
    jiaAsync: (number, time) => createIncrementAsyncAction(number, time)
  }
)(Count)
