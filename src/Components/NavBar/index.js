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
                    style={{ width: 160 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    {
                        navMenus.map((menu,index)=>(
                            <SubMenu key={index}  title={menu.name}>
                                {
                                    menu.children.map((subMenu,keys)=>(
                                        <Menu.Item key={keys} icon={<AppstoreOutlined />}>
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