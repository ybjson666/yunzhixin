import { combineReducers } from 'redux';
import { SET_MENU_LIST,SET_CUR_PATH } from './actionType';

const menuList=(state=[{name:'首页',path:'/'}],action)=>{

    switch (action.type){
        case SET_MENU_LIST:
            return action.data
        default:
            return state;
    }
}

const curPath=(state='/',action)=>{

    switch (action.type){
        case SET_CUR_PATH:
            return action.data
        default:
            return state;
    }
}

export default combineReducers({
    menuList,
    curPath
})