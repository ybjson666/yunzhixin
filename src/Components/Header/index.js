import React,{ Component }from 'react';

import './header.less'
import logo from '../../assets/images/logo.png'



export default class Header extends Component{

    render(){
        return(
            <div className="header-bar">
                <div className="header-left fl">
                    <div className="logo fl"><img src={logo} alt=""/></div>
                </div>
                <div className="header-right fr"></div>
                <div className="cl"></div>
            </div>
        )
    }
}