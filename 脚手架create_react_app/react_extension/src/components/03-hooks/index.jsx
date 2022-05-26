import React, { Component } from 'react'
import  ReactDOM  from 'react-dom'

// 类式组件
/* class Demo extends Component {
  state = {count: 0}

  myRef = React.createRef()

  add = () => {
    this.setState(state => ({count:state.count+1}))
  }

  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState(state=> ({count:state.count+1}))
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  destory = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  show = () => {
    alert(this.myRef.current.value)
  }
  
  render() {
    return (
      <div>
        <input ref={this.myRef} type="text" />
        <h2>当前求和为{this.state.count}</h2>
        <button onClick={this.add}>+</button>
        <button onClick={this.destory}>卸载</button>
        <button onClick={this.show}>点击提示数据</button>
      </div>
    )
  }
} */

// 函数式组件
function Demo(){
  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState("Tom")

  const myRef = React.useRef()

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count+1)
    },1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  function add(){
    setCount(count => count+1)
  }

  function change(){
    setName('Jack')
  }

  function destory(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  function show(){
    alert(myRef.current.value)
  }

  return (
    <div>
      <input ref={myRef} type="text" />
      <h2>当前求和为{count}</h2>
      <h2>我的名字是：{name}</h2>
      <button onClick={add}>+</button>
      <button onClick={change}> 点我改名</button>
      <button onClick={destory}>卸载</button>
      <button onClick={show}>点击提示数据</button>
    </div>
  )
}


export default Demo