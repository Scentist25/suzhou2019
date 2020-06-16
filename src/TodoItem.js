import React from 'react';

//定义一个组件
class TodoItem extends React.Component {


    handelDelete(){
        this.props.delete (this.props.index);
    }

    render() {
        return(
            <div onClick={this.handelDelete.bind(this)}>
                {this.props.content}
            </div>

        );
    }
}


export default TodoItem;
