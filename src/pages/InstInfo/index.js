import React,{ Component }from 'react';
import { Tabs,Input,Table,Row,Col, Button,Form,Radio,Select } from 'antd';
import './instInfo.less';



const { TabPane } = Tabs;
const { Option } = Select;

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
                createTime:"2019-04-17 15:35:23",
                id:"001"
            },
            {
                instNum: 'DLS0800002',
                instName: "上海倾宇信息科技有限公司",
                briefName: '上海倾宇',
                contactPerson:"刘敏",
                contactPhone:"021-67662805",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:45:58",
                id:"002"
            },
            {
                instNum: 'DLS0800003',
                instName: "付临门支付有限公司",
                briefName: '付临门',
                contactPerson:"田曼",
                contactPhone:"13818613922",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:51:09",
                id:"003"
            },
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                briefName: '测试机构',
                contactPerson:"秦原伟",
                contactPhone:"150213126071",
                status:"未审核",
                remark:"暂无",
                createTime:"2019-04-17 15:35:23",
                id:"004"
            },
            {
                instNum: 'DLS0800002',
                instName: "上海倾宇信息科技有限公司",
                briefName: '上海倾宇',
                contactPerson:"刘敏",
                contactPhone:"021-67662805",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:45:58",
                id:"005"
            },
            {
                instNum: 'DLS0800003',
                instName: "付临门支付有限公司",
                briefName: '付临门',
                contactPerson:"田曼",
                contactPhone:"13818613922",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:51:09",
                id:"006"
            },
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                briefName: '测试机构',
                contactPerson:"秦原伟",
                contactPhone:"150213126071",
                status:"未审核",
                remark:"暂无",
                createTime:"2019-04-17 15:35:23",
                id:"007"
            },
            {
                instNum: 'DLS0800002',
                instName: "上海倾宇信息科技有限公司",
                briefName: '上海倾宇',
                contactPerson:"刘敏",
                contactPhone:"021-67662805",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:45:58",
                id:"008"
            },
            {
                instNum: 'DLS0800003',
                instName: "付临门支付有限公司",
                briefName: '付临门',
                contactPerson:"田曼",
                contactPhone:"13818613922",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:51:09",
                id:"009"
            },
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                briefName: '测试机构',
                contactPerson:"秦原伟",
                contactPhone:"150213126071",
                status:"未审核",
                remark:"暂无",
                createTime:"2019-04-17 15:35:23",
                id:"010"
            },
            {
                instNum: 'DLS0800002',
                instName: "上海倾宇信息科技有限公司",
                briefName: '上海倾宇',
                contactPerson:"刘敏",
                contactPhone:"021-67662805",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:45:58",
                id:"011"
            },
            {
                instNum: 'DLS0800003',
                instName: "付临门支付有限公司",
                briefName: '付临门',
                contactPerson:"田曼",
                contactPhone:"13818613922",
                status:"审核通过",
                remark:"暂无",
                createTime:"2019-04-19 13:51:09",
                id:"012"
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
        const otherFormItemLayout = {
            labelCol: {
              xs: { span: 6 },
              sm: { span: 4 },
              lg:{ span: 3 }
            },
            wrapperCol: {
              xs: { span: 4 },
              sm: { span: 19 },
              lg:{ span: 10 }
            }
        };
        const otherFormItemLayout2 = {
            labelCol: {
              xs: { span: 6 },
              sm: { span: 4 },
              lg:{ span: 3 }
            },
            wrapperCol: {
              xs: { span: 4 },
              sm: { span: 19 },
              lg:{ span: 6 }
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
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime',
            },
            {
                title: '操作',
                dataIndex: 'operate',
                key: 'operate',
                render:()=>(
                    <div className="operate-wraps">
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
                            <div className="tab-section">
                                <Table
                                    dataSource={this.state.instDatas}
                                    columns={columns}
                                    rowKey={(text)=>(text.id)}
                                />
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="机构信息添加" key="2" className="tab-block">
                        <div className="tab-items">
                            <div className="tab-items">
                                <div className="title">基本信息</div>
                                <Form className='form-part add-form' {...formItemLayout} >
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="代理商全称"
                                                name="agentname"
                                                rules={[{ required: true, message: '请输入代理商全称' }]}
                                                {...otherFormItemLayout} 
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="代理商简称"
                                                name="agentBriefname"
                                                rules={[{ required: true, message: '请输入代理商简称' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="营业执照"
                                                name="license"
                                                rules={[{ required: false, message: '请输入营业执照' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="企业类型"
                                                name="compType"
                                                rules={[{ required: true, message: '请选择企业类型' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Radio.Group>
                                                    <Radio value="1">一般纳税人</Radio>
                                                    <Radio value="2">小规模纳税人</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="代理手机号"
                                                name="phone"
                                                rules={[{ required: true, message: '请输入代理手机号' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="联系人"
                                                name="contactPerson"
                                                rules={[{ required: true, message: '请输入联系人' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="邮箱"
                                                name="email"
                                                rules={[{ required: true, message: '请输入邮箱' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="企业法人"
                                                name="legal"
                                                rules={[{ required: true, message: '请输入企业法人' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="联系地址"
                                                name="address"
                                                rules={[{ required: true, message: '请输入联系地址' }]}
                                                {...otherFormItemLayout} 
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="开票联系电话"
                                                name="phone"
                                                rules={[{ required: true, message: '请输入开票联系电话' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                name="bank"
                                                label="开户银行"
                                                hasFeedback
                                                rules={[{ required: true, message: '请选择开户行' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Select placeholder="请选择开户行">
                                                    <Option value="1">中国农业银行</Option>
                                                    <Option value="2">中国工商银行</Option>
                                                    <Option value="3">中国建设银行</Option>
                                                    <Option value="4">中国招商银行</Option>
                                                    <Option value="5">中国银行</Option>
                                                    <Option value="6">兴业银行</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="开户支行名称"
                                                name="brachname"
                                                rules={[{ required: true, message: '请输入开户支行名称' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="银行卡号"
                                                name="cardnum"
                                                rules={[{ required: true, message: '请输入银行卡号' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="开户联行号"
                                                name="liannum"
                                                rules={[{ required: true, message: '请输入开户联行号' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                name="filiale"
                                                label="所属分公司"
                                                hasFeedback
                                                rules={[{ required: true, message: '请选择所属分公司' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Select placeholder="请选择所属分公司">
                                                    <Option value="1">总分公司</Option>
                                                    <Option value="2">青羊分公司</Option>
                                                    <Option value="3">锦江分公司</Option>
                                                    <Option value="4">金牛分公司</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                name="sjxs"
                                                label="上级销售"
                                                hasFeedback
                                                rules={[{ required: true, message: '请选择上级销售' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Select placeholder="请选择上级销售">
                                                    <Option value="1">总销售</Option>
                                                    <Option value="2">自营机构</Option>
                                                    <Option value="3">测试</Option>
                                                    <Option value="4">张涛</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                name="signType"
                                                label="签约类型"
                                                hasFeedback
                                                rules={[{ required: true, message: '签约类型' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Select placeholder="请选择所属分公司">
                                                    <Option value="1">无需签约</Option>
                                                    <Option value="2">公众号签约</Option>
                                                    <Option value="3">短信签约</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={2} offset={3}>
                                            <Button type="primary">保存</Button>
                                        </Col>
                                        <Col span={2}>
                                            <Button type="default">返回</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
