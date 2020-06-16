import React from 'react';
 import  TodoItem from './TodoItem';
//定义一个组件
class TodoList extends React.Component{
    //组件构造函数 ES6
    constructor(props){
        super(props);//初始化
        this.state ={
            list:[

            ],
            inputValue:''

        }
    }
    handleInputChange(e){
        console.log(this.state.inputValue, '1');
        this.setState({
            inputValue:e.target.value
       });

        console.log(this.state.inputValue, '2');
    }


     handleBtnClick(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],//把之前list的内容放在前面
            inputValue:''

        })
     }


    handleDelete(index){
        const list = [...this.state.list];//拷贝一份再操作
        list .splice(index,1);
        this.setState({
            list:list
        })

    }

    
  render(){
    return(
        <div>
            <div>
            <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
            <button onClick={this.handleBtnClick.bind(this)}>add</button>
            </div>
            < ul >
                {
                    this .state.list.map((item,index) => {
                        /*return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>*/
                        return <TodoItem content={item} index={index} delete={this.handleDelete.bind(this)} />
                    })
                }

            </ul>
        </div>

    );
  }

}



export default TodoList;//导出组件
