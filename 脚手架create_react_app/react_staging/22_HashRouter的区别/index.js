import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import App from './App'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'))

  // BrowserRouter使用的是H5的history api HashRouter使用的是URL的哈希值
  // 刷新后BrowserRouter没有影响，因为state保存在history对象中
  // 刷新后HashRouter会导致state参数丢失 