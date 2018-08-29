import React, { Component } from 'react';
import {Button, Input, List} from "antd";


class TodolistUI extends Component {
    render(){
        return(
            <div style={{marginTop:"10px",marginLeft:"10px"}}>
                <div>
                    <Input
                        value={this.props.inputValue}
                        onChange={this.props.handleInputChange}
                        placeholder="Type your to-do-list"
                        style={{width:"500px",marginRight:"20px"}}
                    />
                    <Button
                        onClick={this.props.handleBtnClick}
                        type="primary"
                    >
                        Submit
                    </Button>
                </div>
                <List
                    style={{marginTop:"10px",width:"700px"}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => (<List.Item onClick={(index)=>{this.props.handleItemClick(index)}}>{item}</List.Item>)}
                />
            </div>
        )
    }
}
export default TodolistUI;