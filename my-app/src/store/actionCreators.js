import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM,DELETE_ITEM } from "./actionTypes";


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
