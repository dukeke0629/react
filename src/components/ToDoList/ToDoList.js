import {Component} from "react";
import React from "react";
import {connect} from 'react-redux';
//UI
class ToDoList extends Component{
  render(){
    let {list,add}=this.props;
    return (
      <>
        <h3>留言板</h3>
        <input type="button" value="提交" onClick={add}/>
        <ul>
          {
            list.map((val,index)=>(
              <li key={index}>{val}</li>
            ))
          }
        </ul>
      </>
    )
  }
}


const mapStateToProps=state=>({
  list:state.list
});

const mapDispatchToProps=dispatch=>({
  add:()=>{
    dispatch({type:'ADD_ITEM',payload:'ccc'})
  }
});


export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);



















