import React, { Component } from 'react'

const DetailData = [
  {id:'01', content:'你好，中国'},
  {id:'02', content:'你好，广东'},
  {id:'03', content:'你好，广州'},
]

export default class Detail extends Component {
  render() {
    const {id, title} = this.props.match.params
    const findResult = DetailData.find((obj) => {
      return obj.id === id
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
