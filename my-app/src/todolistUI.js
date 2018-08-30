import React from 'react';
import {Button, Input, List} from "antd";


const TodolistUI = (props)=>{

    return(
        <div style={{marginTop:"10px",marginLeft:"10px"}}>
            <div>
                <Input
                    value={props.inputValue}
                    onChange={props.handleInputChange}
                    placeholder="Type your to-do-list"
                    style={{width:"500px",marginRight:"20px"}}
                />
                <Button
                    onClick={props.handleBtnClick}
                    type="primary"
                >
                    Submit
                </Button>
            </div>
            <List
                style={{marginTop:"10px",width:"700px"}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={()=>{props.handleItemClick(index)}}>{item}</List.Item>)}
            />
        </div>
    )

};

export default TodolistUI;