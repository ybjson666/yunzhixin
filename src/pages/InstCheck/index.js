import React,{ Component }from 'react';
import { Tabs,Input,Table,Row,Col, Button,Form} from 'antd';
import './instCheck.less';



const { TabPane } = Tabs;

export default class InstCheck extends Component{

    state={
        instDatas:[]
    }

    componentDidMount=()=>{
        const instDatas=[
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                superNum: 'ASSH154',
                contactor:"秦原伟",
                area:"181,level178,",
                status:"未审核",
                remark:"暂无",
                comer:"测试机构",
                createTime:"2019-04-17 15:35:23",
                id:"001"
            },
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                superNum: 'ASSH154',
                contactor:"秦原伟",
                area:"181,level178,",
                status:"审核通过",
                remark:"暂无",
                comer:"测试机构",
                createTime:"2019-04-17 15:35:23",
                id:"002"
            },
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                superNum: 'ASSH154',
                contactor:"秦原伟",
                area:"181,level178,",
                status:"未审核",
                remark:"暂无",
                comer:"测试机构",
                createTime:"2019-04-17 15:35:23",
                id:"003"
            },
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                superNum: 'ASSH154',
                contactor:"秦原伟",
                area:"181,level178,",
                status:"审核通过",
                remark:"暂无",
                comer:"测试机构",
                createTime:"2019-04-17 15:35:23",
                id:"004"
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
                title: '代理商编号',
                dataIndex: 'instNum',
                key: 'instNum',
            },
            {
                title: '代理商全称',
                dataIndex: 'instName',
                key: 'instName',
            },
            {
                title: '代理商上级编号',
                dataIndex: 'superNum',
                key: 'superNum',
            },
            {
                title: '联系人',
                dataIndex: 'contactor',
                key: 'contactor',
            },
            {
                title: '归属区域',
                dataIndex: 'area',
                key: 'area',
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render:(text,record)=>{
                    return <span className={text==='审核通过'?'pass':null}>{text}</span>
                }
            },
            {
                title: '备注',
                dataIndex: 'remark',
                key: 'remark',
            },
            {
                title: '进件者',
                dataIndex: 'comer',
                key: 'comer',
            },
            {
                title: '进件时间',
                dataIndex: 'createTime',
                key: 'createTime',
            },
            {
                title: '操作',
                dataIndex: 'operate',
                key: 'operate',
                render:()=>(
                    <div className="operate-wraps">
                        <span >审核</span>
                    </div>
                )
            }
            
        ]

        return(
            <div className="inst-container">
                <Tabs defaultActiveKey="1" className="tab-block">
                    <TabPane tab="代理商审核信息列表" key="1">
                        <div className="tab-items">
                            <div className="form-block">
                                <Form className='form-part' {...formItemLayout} >
                                    <Row>
                                        <Col span={5}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="代理商编号:" 
                                                instnum="instnum"
                                                rules={
                                                    [
                                                        {
                                                            required: false,
                                                            message: '请输入代理商编号'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Input  placeholder='请输入代理商编号'/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={5}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="代理商全称:" 
                                                agentName="agentName"
                                                rules={
                                                    [
                                                        {
                                                            required: false,
                                                            message: '请输入代理商全称'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Input  placeholder='请输入代理商全称'/>
                                            </Form.Item> 
                                        </Col>
                                        <Col span={5}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="联系人:" 
                                                contactor="contactor"
                                                rules={
                                                    [
                                                        {
                                                            required: false,
                                                            message: '请输入联系人'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Input  placeholder='请输入联系人'/>
                                            </Form.Item> 
                                        </Col>
                                        <Col span={5}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="备注:" 
                                                remark="remark"
                                                rules={
                                                    [
                                                        {
                                                            required: false,
                                                            message: '请输入备注'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Input  placeholder='请输入备注'/>
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
