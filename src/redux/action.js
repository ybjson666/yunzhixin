import { SET_MENU_LIST,SET_CUR_PATH } from './actionType';

export const  resetMenuList=(list)=>({type:SET_MENU_LIST,data:list});
export const  resetCurPath=(path)=>({type:SET_CUR_PATH,data:path});
