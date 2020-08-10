import React,{ Component }from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { AppstoreOutlined} from '@ant-design/icons';
import {navMenus} from '../../utils/menus'
import { connect } from 'react-redux';
import { resetMenuList } from '../../redux/action';
import "./nav.less"


const { SubMenu } = Menu;

class NavBar extends Component{

    handleClick=(item)=>{
        let _this=this;
        const menus=JSON.parse(JSON.stringify(_this.props.menuList));
        let index=menus.findIndex(v=>v.name===item.name)
        if(index<0){
            menus.push(item)
        }
        this.props.resetMenuList(menus);
    }

    render(){
        return(
            <div className="nav-bar">
                <Menu
                    style={{ width: 180 }}
                    mode="inline"
                >
                    {
                        navMenus.map((menu)=>(
                            <SubMenu key={menu.order}  title={menu.name}>
                                {
                                    menu.children.map((subMenu)=>(
                                        <Menu.Item key={subMenu.suborder} icon={<AppstoreOutlined />}>
                                            <Link to={subMenu.path} onClick={()=>{this.handleClick(subMenu)}}>{subMenu.name}</Link>
                                        </Menu.Item>
                                    ))
                                }
                                
                            </SubMenu>
                        ))
                    }
                </Menu>
            </div>
        )
    }
}

export default connect(
    state=>({menuList:state.menuList}),
    { resetMenuList }
)(NavBar)