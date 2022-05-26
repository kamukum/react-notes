import React, { Component } from 'react'

const UsernameContext = React.createContext()

export default class Demo extends Component {

  state = { username: 'tom', age: 18 }
  render() {
    return (
      <div>
        <h1>我是A组件</h1>
        <h4>用户名是：{this.state.username}</h4>
        <UsernameContext.Provider value={{ username: this.state.username, age: this.state.age }}>
          <B />
        </UsernameContext.Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div>
        <h1>我是B组件</h1>
        {/* <h4>从A组件收到的用户名是：{this.props.username}</h4> */}
        <h4>从A组件收到的用户名是：{this.props.username}</h4>
        <C />
      </div>
    );
  }
}

/* class C extends Component {
  static contextType = UsernameContext
  render() {
    return (
      <div>
        <h1>我是C组件</h1>
        <h4>从A组件收到的用户名是：{this.context.username}</h4>
      </div>
    );
  }
} */

function C() {
  return (
    <div>
      <h1>我是C组件</h1>
      <h4>从A组件收到的用户名是：
        <UsernameContext.Consumer>
          {
            value => {
              return value.username
            }
          }
        </UsernameContext.Consumer>
      </h4>
    </div>
  );
}




