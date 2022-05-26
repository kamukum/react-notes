import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  handleClearAll = () => {
    this.props.clearAllDone()
  }

  
  render() {
    const {todos} = this.props

    const doneCount = todos.reduce((prev, curr) => {
      return prev + (curr.done? 1 : 0)
    }, 0)

    const total = todos.length
    return (
      <div className='todo-footer'> 
          <label>
            <input onChange={this.handleCheckAll} checked={doneCount===total && total!==0?true:false} type="checkbox"/>
          </label>  
          <span>
            <span>已完成{doneCount}</span> / {total}
          </span>
          <button onClick={this.handleClearAll} className='btn btn-danger'>清除已完成任务</button>
      </div>
    )
  }
}
