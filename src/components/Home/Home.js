import React,{Component}from 'react';
import List from '../../common/List/List.js';
import Hender from '../../common/Header/Header.js';

class Home extends Component{
    state={
        list:[]
    }
    componentDidMount(){
        fetch(
            `/data/listdata.json`
        ).then(
            res=>res.json()
        ).then(
            data=>{this.setState({list:data})
            console.log(this.state.list)
        }
            
        )
    }
    render(){
        return(
            <>
          
            <Hender/>
            <List list={this.state.list} dataName="home" />
            </>
        )
    }
}
export default Home;