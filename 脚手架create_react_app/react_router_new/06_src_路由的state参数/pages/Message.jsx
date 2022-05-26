import React from 'react'
import {Link, Outlet} from 'react-router-dom'


export default function Message() {
  const [messages] = React.useState([
    {id:'001',title:'消息1',content:'11111'},
    {id:'002',title:'消息2',content:'22222'},
    {id:'003',title:'消息3',content:'33333'},
    {id:'004',title:'消息4',content:'444444'},
  ])
  return (
    <div>
      <ul>
       {
         messages.map((m) => {
          return (
            <li key={m.id}>
            <Link to='detail' state={{id:m.id, title:m.title, content:m.content}} >{m.title}</Link>&nbsp;&nbsp;
          </li>
          )
         })
       }
      </ul>

      <Outlet/>
    </div>
  )
}
