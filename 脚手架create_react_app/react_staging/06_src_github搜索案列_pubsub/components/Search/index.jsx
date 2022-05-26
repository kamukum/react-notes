import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import axios from 'axios';

export default class Search extends Component {
  serach = () => { 
    // 获取用户输入(连续解构赋值+重命名)
    const {keyWordElement:{value:keyWord}} = this
    PubSub.publish('MSG', {isFirst:false, isLoading:true})
    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        PubSub.publish('MSG', {isLoading:false,users:response.data.items})
      },
      error => {
        PubSub.publish('MSG', {isLoading:false,err:error.message})
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键字点击搜索" />&nbsp;
          <button onClick={this.serach}>Search</button>
        </div>
      </section>
    )
  }
}
