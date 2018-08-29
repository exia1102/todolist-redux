import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import TodolistUI from './todolistUI';
import { store }  from './store/';
import { getInputChange, getTodoItem, deleteItem} from './store/actionCreators';







class Todolist extends Component {

    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemClick=this.handleItemClick.bind(this);
        store.subscribe(this.handleStoreChange);

    }

    render(){
        return(
            <TodolistUI
                handleInputChange={this.handleInputChange}
                inputValue={this.state.inputValue}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handleItemClick={this.handleItemClick}

            />
        )

    }
    handleInputChange(e){
        const action=getInputChange(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange(){
        this.setState(store.getState())
    }
    handleBtnClick(){
        const action=getTodoItem();
        store.dispatch(action);
    }
    handleItemClick(index){
        const action= deleteItem(index);
        store.dispatch(action)
    }

}

export default Todolist;