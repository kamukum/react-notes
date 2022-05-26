import React, { PureComponent } from 'react'

export default class Demo extends PureComponent {
  state = {a:'a'}

  change = () => {
    this.setState({a:'b'})
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   if(this.state.a === nextState.a){
  //     return false
  //   }
  //   return true
  // }

  render() {
    return (
      <div>
        <h3>我是Parent组件:{this.state.a}</h3>
        <button onClick={this.change}>dianwo huan</button>
        <Child a={this.state.a}/>
      </div>
    )
  }
}



class Child extends PureComponent {
  render() {
    return (
      <div>
        <h3>我是Child组件</h3>
        <span>wojiedaode {this.props.a}</span>
      </div>
    );
  }
}


