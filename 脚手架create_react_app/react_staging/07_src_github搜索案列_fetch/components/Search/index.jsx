import React, { Component } from 'react'
import PubSub from 'pubsub-js';
// import axios from 'axios';

export default class Search extends Component {
  serach = async () => {
    // 获取用户输入(连续解构赋值+重命名)
    const { keyWordElement: { value: keyWord } } = this
    PubSub.publish('MSG', { isFirst: false, isLoading: true })

    //#region 发送网络请求
    // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
    //   response => {
    //     PubSub.publish('MSG', {isLoading:false,users:response.data.items})
    //   },
    //   error => {
    //     PubSub.publish('MSG', {isLoading:false,err:error.message})
    //   }
    // )
    //#endregin

    // 发送网络请求---fetch
    // fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
    //   response => {
    //     return response.json()
    //   },
    //   // err => {
    //   //   console.log('联系服务器失败了', err)
    //   //   return new Promise(() => {})
    //   // }
    // ).then(
    //   response => {console.log('获取数据成功了',response);},
    //   // err => {console.log('获取数据失败了', err)}
    // ).catch(
    //   (error) => {console.log(error);}
    // )

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
      const data = await response.json()
      console.log(data);
    } catch (error) {
      console.log('请求失败', error)
    }


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
