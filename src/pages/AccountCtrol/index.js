import React,{ Component }from 'react';
import { Tabs,Input,Table,Row,Col, Button,Form,Select} from 'antd';
import './accountCtrol.less';



const { TabPane } = Tabs;
const { Option } = Select;

export default class AccountCtrol extends Component{

    state={
        instDatas:[]
    }

    componentDidMount=()=>{
        const instDatas=[
            {   
                ID:"682282",
                instNum:'DLS0832959',
                instName:"深圳市超盟金服技术信息服务有限公司",
                acctNum:'1596893937818',
                accStatus:"正常",
                accType:"代理商",
                totals:"200.00",
                remins:"100",
                zaiMoney:"2.00",
                freezMoney:"1.00",
                remark:"暂无",
                createTime:"2019-04-17 15:35:23",
                id:"001"
            },
            {   
                ID:"682275",
                instNum:'DLS0831259',
                instName:"上海掌倍科技有限公司(鼎刷云店网商)",
                acctNum:'1591079639730',
                accStatus:"正常",
                accType:"代理商",
                totals:"200.00",
                remins:"100",
                zaiMoney:"2.00",
                freezMoney:"1.00",
                remark:"暂无",
                createTime:"2019-04-17 15:35:23",
                id:"002"
            },
            {   
                ID:"682283",
                instNum:'DLS0832059',
                instName:"深圳市超盟之家商业管理有限公司",
                acctNum:'1596893943079',
                accStatus:"正常",
                accType:"代理商",
                totals:"200.00",
                remins:"100",
                zaiMoney:"2.00",
                freezMoney:"1.00",
                remark:"暂无",
                createTime:"2019-04-17 15:35:23",
                id:"003"
            },
            {   
                ID:"682278",
                instNum:'DLS0832559',
                instName:"浙江创付电子科技有限公司",
                acctNum:'1594110714550',
                accStatus:"正常",
                accType:"代理商",
                totals:"200.00",
                remins:"100",
                zaiMoney:"2.00",
                freezMoney:"1.00",
                remark:"暂无",
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
                title: 'ID',
                dataIndex: 'ID',
                key: 'ID',
            },
            {
                title: '机构编号',
                dataIndex: 'instNum',
                key: 'instNum',
            },
            {
                title: '机构名称',
                dataIndex: 'instName',
                key: 'instName',
            },
            {
                title: '账户编号',
                dataIndex: 'acctNum',
                key: 'acctNum',
            },
            {
                title: '账户状态',
                dataIndex: 'accStatus',
                key: 'accStatus',
            },
            {
                title: '账户类型',
                dataIndex: 'accType',
                key: 'accType'
            },
            {
                title: '总余额',
                dataIndex: 'totals',
                key: 'totals'
            },
            {
                title: '可用余额',
                dataIndex: 'remins',
                key: 'remins'
            },
            {
                title: '在途金额',
                dataIndex: 'zaiMoney',
                key: 'zaiMoney'
            },
            {
                title: '冻结金额',
                dataIndex: 'freezMoney',
                key: 'freezMoney'
            },
            {
                title: '备注',
                dataIndex: 'remark',
                key: 'remark',
            },
           
            {
                title: '更新时间',
                dataIndex: 'createTime',
                key: 'createTime',
            },
            {
                title: '操作',
                dataIndex: 'operate',
                key: 'operate',
                render:()=>(
                    <div className="operate-wraps">
                        <span style={{marginRight:5}}>调账</span>
                        <span >调账历史</span>
                    </div>
                )
            }
            
        ]

        return(
            <div className="accountCtrol-container">
                <Tabs defaultActiveKey="1" className="tab-block">
                    <TabPane tab="账户调账列表" key="1">
                        <div className="tab-items">
                            <div className="form-block">
                                <Form className='form-part' {...formItemLayout} >
                                    <Row>
                                        <Col span={5}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="商户编号:" 
                                                instnum="instnum"
                                                rules={
                                                    [
                                                        {
                                                            required: false,
                                                            message: '请输入商户编号'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Input  placeholder='请输入商户编号'/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={5}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="账户编号:" 
                                                accountname="accountname"
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
                                        <Col span={5}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="账户状态:" 
                                                accountstatus="accountstatus"
                                                rules={
                                                    [
                                                        {
                                                            required: false,
                                                            message: '请选择账户状态'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Select placeholder="请选择账户状态">
                                                    <Option value="1">全部</Option>
                                                    <Option value="2">正常</Option>
                                                    <Option value="3">禁入账</Option>
                                                    <Option value="4">禁出账</Option>
                                                    <Option value="5">冻结</Option>
                                                </Select>
                                            </Form.Item> 
                                        </Col>
                                        <Col span={5}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                    label="账户类型:" 
                                                    accountstatus="accountstatus"
                                                    rules={
                                                        [
                                                            {
                                                                required: false,
                                                                message: '请选择账户类型'
                                                            }
                                                        ]
                                                    }
                                                >
                                                <Select placeholder="请选择账户类型">
                                                    <Option value="1">全部</Option>
                                                    <Option value="2">代理商</Option>
                                                    <Option value="3">商户</Option>
                                                    <Option value="4">管理员</Option>
                                                </Select>
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
