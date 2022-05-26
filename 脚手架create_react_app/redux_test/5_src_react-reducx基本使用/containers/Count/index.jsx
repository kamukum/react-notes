// 引入CountUI组件
import CountUI from '../../components/Count'


// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/count_action'

// a函数的返回的对象中的key作为传递给UI组件的props的key，value就作为传递给Ui组件的props的value-状态
const mapStateToProps = (state) => {
  return {count:state}
}

// a函数的返回的对象中的key作为传递给UI组件的props的key，value就作为传递给Ui组件的props的value-操作状态的方法
const mapDispatchToProps = (dispatch) => {
 return {
  jia:number => dispatch(createIncrementAction(number)),
  jian:number => dispatch(createDecrementAction(number)),
  jiaAsync:(number, time) => dispatch(createIncrementAsyncAction(number,time))
 }
}


// 创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
