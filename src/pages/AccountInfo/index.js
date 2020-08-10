import React,{ Component }from 'react';
import { Tabs,Input,Table,Row,Col, Button,Form} from 'antd';
import './accountInfo.less';



const { TabPane } = Tabs;

export default class AccountInfo extends Component{

    state={
        instDatas:[]
    }

    componentDidMount=()=>{

        const instDatas=[
            {
                instNum: 'DLS0832059',
                instName: "深圳市超盟之家商业管理有限公司",
                totals: '2000.00',
                remined:"300.00",
                remark:"暂无",
                updateTime:"2019-04-17 15:35:23",
                id:"001"
            },
            {
                instNum: 'DLS0832959',
                instName: "深圳市超盟金服技术信息服务有限公司",
                totals: '2000.00',
                remined:"300.00",
                remark:"暂无",
                updateTime:"2019-04-17 15:35:23",
                id:"002"
            },
            {
                instNum: 'DLS0831259',
                instName: "上海掌倍科技有限公司(鼎刷云店网商)",
                totals: '2000.00',
                remined:"300.00",
                remark:"暂无",
                updateTime:"2019-04-17 15:35:23",
                id:"003"
            },
            {
                instNum: 'DLS0832559',
                instName: "浙江创付电子科技有限公司",
                totals: '2000.00',
                remined:"300.00",
                remark:"暂无",
                updateTime:"2019-04-17 15:35:23",
                id:"004"
            },
            {
                instNum: 'DLS0831459',
                instName: "长沙天展信息技术有限公司",
                totals: '2000.00',
                remined:"300.00",
                remark:"暂无",
                updateTime:"2019-04-17 15:35:23",
                id:"005"
            }
        ]

        this.setState({ instDatas })
    }

    render(){
        
        const formItemLayout = {
            labelCol: {
              xs: { span: 6 },
              sm: { span: 8 },
              lg:{ span: 6 }
            },
            wrapperCol: {
              xs: { span: 8 },
              sm: { span: 8 },
              lg:{ span: 16 }
            }
        };
        const tailFormItemLayout = {
            labelCol: {
              xs: { span: 6 },
              sm: { span: 4 },
              lg:{ span: 6 }
            },
            wrapperCol: {
              xs: { span: 4 },
              sm: { span: 19 },
              lg:{ span: 12 }
            }
        };

        const columns=[
            {
                title: '账户编号',
                dataIndex: 'instNum',
                key: 'instNum',
            },
            {
                title: '账户名称',
                dataIndex: 'instName',
                key: 'instName',
            },
            {
                title: '总余额',
                dataIndex: 'totals',
                key: 'totals',
            },
            {
                title: '可用余额',
                dataIndex: 'remined',
                key: 'remined',
            },
            {
                title: '备注',
                dataIndex: 'remark',
                key: 'remark',
            },
            {
                title: '更新时间',
                dataIndex: 'updateTime',
                key: 'updateTime',
            } 
        ]

        return(
            <div className="inst-container">
                <Tabs defaultActiveKey="1" className="tab-block">
                    <TabPane tab="账户明细列表" key="1">
                        <div className="tab-items">
                            <div className="form-block">
                                <Form className='form-part' {...formItemLayout} >
                                    <Row>
                                        <Col span={5}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="账户编号:" 
                                                instnum="instnum"
                                                rules={
                                                    [
                                                        {
                                                            required: false,
                                                            message: '请输入账户编号'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Input  placeholder='请输入账户编号'/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={1} style={{marginLeft:-80}}>
                                            <Button type="primary">查询</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            <div className="tab-section">
                                <Table
                                    dataSource={this.state.instDatas}
                                    columns={columns}
                                    rowKey={(text)=>(text.id)}
                                />
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
