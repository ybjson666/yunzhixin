import React,{ Component }from 'react';
import { connect } from 'react-redux';
import { Link,withRouter } from 'react-router-dom';
import { resetMenuList,resetCurPath } from '../../redux/action';

import './crumbs.less'


class Crumbs extends Component{
    state={
        menus:[]
    }
    componentWillReceiveProps=(nextProps)=>{
        let menus=nextProps.menuList;
        this.setState({menus})
    }
    componentDidMount=()=>{
        let menus=this.props.menuList;
        let path=this.props.curPath;
        this.setState({menus})
        this.props.history.replace(path)
    }

    closePath=(index)=>{
        let _this=this;
        let menus=JSON.parse(JSON.stringify(_this.props.menuList));
        let path=this.props.curPath;
        if(menus.length>1){
            if(index>0){
                path =menus[index-1].path;
            }else {
                path =menus[index+1].path;
            }
            menus.splice(index,1);
        }
        this.props.resetCurPath(path)
        this.props.resetMenuList(menus);
        this.props.history.replace(path);
        
    }

    render(){
        const {menus}=this.state;
        return(
            <div className="crums-bar">
                <ul className="menu-lists">
                    {
                        menus.map((menu,index)=>(
                            <li key={index} className={this.props.history.location.pathname===menu.path?"active":null}>
                                <span className="close-btn" onClick={()=>{this.closePath(index)}}></span>
                                <Link to={menu.path}>{menu.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
let routeCrumb=withRouter(Crumbs)
export default connect(
    state=>({
        menuList:state.menuList,
        curPath:state.curPath
    }),
    { resetMenuList,resetCurPath }
)(routeCrumb)