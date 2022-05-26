import React from 'react'
import {Navigate} from 'react-router-dom'

export default function About() {
  const [sum, setSum] = React.useState(1)


  return (
    <div>
      <h3>我是About的内容</h3>
      {sum === 2? <Navigate to='/home' replace={true}/> : <h4>当前sum值是：{sum}</h4>}    
      <button onClick={() => setSum(2)}>点我sum值变成2</button>
    </div>

  )
}
