import React,{ Component }from 'react';
import { Tabs,Input,Table,Row,Col, Button,Form } from 'antd';
import './instInfo.less';



const { TabPane } = Tabs;

export default class InstInfo extends Component{

    state={
        instDatas:[]
    }

    componentDidMount=()=>{
        const instDatas=[
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                briefName: '测试机构',
                contactPerson:"秦原伟",
                contactPhone:"150213126071",
                status:"未审核",
                remark:"暂无",
                createTime:"2019-04-17 15:35:23"
            },
            {
                instNum: 'DLS0800002',
                instName: "上海倾宇信息科技有限公司",
                briefName: '上海倾宇',
                contactPerson:"刘敏",
                contactPhone:"021-67662805",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:45:58"
            },
            {
                instNum: 'DLS0800003',
                instName: "付临门支付有限公司",
                briefName: '付临门',
                contactPerson:"田曼",
                contactPhone:"13818613922",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:51:09"
            },
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                briefName: '测试机构',
                contactPerson:"秦原伟",
                contactPhone:"150213126071",
                status:"未审核",
                remark:"暂无",
                createTime:"2019-04-17 15:35:23"
            },
            {
                instNum: 'DLS0800002',
                instName: "上海倾宇信息科技有限公司",
                briefName: '上海倾宇',
                contactPerson:"刘敏",
                contactPhone:"021-67662805",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:45:58"
            },
            {
                instNum: 'DLS0800003',
                instName: "付临门支付有限公司",
                briefName: '付临门',
                contactPerson:"田曼",
                contactPhone:"13818613922",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:51:09"
            },
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                briefName: '测试机构',
                contactPerson:"秦原伟",
                contactPhone:"150213126071",
                status:"未审核",
                remark:"暂无",
                createTime:"2019-04-17 15:35:23"
            },
            {
                instNum: 'DLS0800002',
                instName: "上海倾宇信息科技有限公司",
                briefName: '上海倾宇',
                contactPerson:"刘敏",
                contactPhone:"021-67662805",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:45:58"
            },
            {
                instNum: 'DLS0800003',
                instName: "付临门支付有限公司",
                briefName: '付临门',
                contactPerson:"田曼",
                contactPhone:"13818613922",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:51:09"
            },
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                briefName: '测试机构',
                contactPerson:"秦原伟",
                contactPhone:"150213126071",
                status:"未审核",
                remark:"暂无",
                createTime:"2019-04-17 15:35:23"
            },
            {
                instNum: 'DLS0800002',
                instName: "上海倾宇信息科技有限公司",
                briefName: '上海倾宇',
                contactPerson:"刘敏",
                contactPhone:"021-67662805",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:45:58"
            },
            {
                instNum: 'DLS0800003',
                instName: "付临门支付有限公司",
                briefName: '付临门',
                contactPerson:"田曼",
                contactPhone:"13818613922",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:51:09"
            }
        ]

        this.setState({ instDatas })
    }

    render(){
        
        const formItemLayout = {
            labelCol: {
              xs: { span: 6 },
              sm: { span: 8 },
              lg:{ span: 4 }
            },
            wrapperCol: {
              xs: { span: 8 },
              sm: { span: 8 },
              lg:{ span: 4 }
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
                title: '机构号',
                dataIndex: 'instNum',
                key: 'instNum',
            },
            {
                title: '机构名称',
                dataIndex: 'instName',
                key: 'instName',
            },
            {
                title: '简称',
                dataIndex: 'briefName',
                key: 'briefName',
            },
            {
                title: '联系人',
                dataIndex: 'contactPerson',
                key: 'contactPerson',
            },
            {
                title: '联系电话',
                dataIndex: 'contactPhone',
                key: 'contactPhone',
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: '备注',
                dataIndex: 'remark',
                key: 'remark',
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime',
            },
            {
                title: '操作',
                dataIndex: 'operate',
                key: 'operate',
                render:()=>(
                    <div>
                        <span  style={{marginRight:10}}>查看</span>
                        <span >修改</span>
                    </div>
                )
            }
            
        ]

        return(
            <div className="inst-container">
                <Tabs defaultActiveKey="1" className="tab-block">
                    <TabPane tab="机构信息列表" key="1">
                        <div className="tab-items">
                            <div className="form-block">
                                <Form className='form-part' {...formItemLayout} >
                                    <Row>
                                        <Col span={6}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="机构号:" 
                                                instnum="instnum"
                                                rules={
                                                    [
                                                        {
                                                            required: true,
                                                            message: '请输入机构号'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Input  placeholder='请输入机构号'/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="机构名称:" 
                                                instname="instname"
                                                rules={
                                                    [
                                                        {
                                                            required: true,
                                                            message: '请输入机名称'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Input  placeholder='请输入机名称'/>
                                            </Form.Item> 
                                        </Col>
                                        <Col span={1} style={{marginLeft:-100}}>
                                            <Button type="primary">查询</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            <div className="tab-block">
                                <Table
                                    dataSource={this.state.instDatas}
                                    columns={columns}
                                />
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="机构信息添加" key="2">
                        <div className="tab-items">
                            <div className="tab-items">

                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
