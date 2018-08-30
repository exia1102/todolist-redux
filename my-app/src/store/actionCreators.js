import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM,INIT_LIST_ITEM } from "./actionTypes";
import axios from "axios";



export const getInputChange = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
});
export const getTodoItem = ()=>({
    type:ADD_TODO_ITEM
});
export const deleteItem = (index)=>({
    type:DELETE_ITEM,
    index
});

export const initListItem= (data) =>({
    type:INIT_LIST_ITEM,
    data
});

export const createListItem=()=>{
    return (dispatch)=>{
        axios.get('/list.json').then((res)=>{
            const data = res.data;
            const action = initListItem(data);
            dispatch(action);
        })
    }
}
