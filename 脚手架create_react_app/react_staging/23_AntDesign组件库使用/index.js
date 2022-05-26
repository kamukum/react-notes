import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'


import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'))

  // BrowserRouter使用的是H5的history api HashrRouter使用的是URL的哈希值
  // 刷新后BrowserRouter没有影响，因为state保存在history对象中
  // 刷新后HashRouter会导致state参数丢失 