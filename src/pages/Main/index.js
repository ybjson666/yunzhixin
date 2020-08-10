import React,{ Component }from 'react';
import Header from '../../Components/Header'
import { Layout } from 'antd'
import { Route,Switch} from 'react-router-dom'
import NavBar from '../../Components/NavBar'
import routes from '../../routes/routes'
import './main.less'
import Crumbs from '../../Components/Crumbs'
import { Provider} from 'react-redux'
import store from '../../redux/store'

const {Sider, Content } = Layout;

export default class Main extends Component{


    render(){
        return(
            <Provider store={store}>
                <Layout>
                    <Header/>
                    <Layout>
                        <Sider width={190}>
                            <NavBar/>
                        </Sider>
                        <Content>
                            <div className="main-contents">
                                <div className="crubms-container">
                                    <Crumbs/>
                                </div>
                                <div className="container">
                                        <Switch>
                                        {
                                            routes.map((item,index)=>(
                                                <Route path={item.path} key={index} exact render={(props)=>(
                                                    <item.component {...props} />
                                                )}/>
                                            ))
                                        }
                                    </Switch>
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Provider>
        )
    }
}

