import React,{ Component }from 'react';
import { Tabs,Input,Table,Row,Col, Button,Form,DatePicker,ConfigProvider,Select} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import './balance.less';


const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
const { Option } = Select;

export default class Balance extends Component{

    state={
        instDatas:[]
    }

    componentDidMount=()=>{

        const instDatas=[
            {
                accountNum:'622558866885',
                instNum: "DLS0832059",
                instName:"充值机构",
                balance: '2000.00',
                createTime:"2019-04-17 15:35:23",
                id:"001"
            },
            {
                accountNum:'622558866885',
                instNum: "DLS0832059",
                instName:"充值机构",
                balance: '2000.00',
                createTime:"2019-04-17 15:35:23",
                id:"002"
            },
            {
                accountNum:'622558866885',
                instNum: "DLS0832059",
                instName:"充值机构",
                balance: '2000.00',
                createTime:"2019-04-17 15:35:23",
                id:"003"
            },
            {
                accountNum:'622558866885',
                instNum: "DLS0832059",
                instName:"充值机构",
                balance: '2000.00',
                createTime:"2019-04-17 15:35:23",
                id:"004"
            },
            {
                accountNum:'622558866885',
                instNum: "DLS0832059",
                instName:"充值机构",
                balance: '2000.00',
                createTime:"2019-04-17 15:35:23",
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
                dataIndex: 'accountNum',
                key: 'chargeNum',
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
                title: '余额',
                dataIndex: 'balance',
                key: 'balance',
            },
            {
                title: '日期',
                dataIndex: 'createTime',
                key: 'createTime',
            } 
        ]

        return(
            <div className="balance-container">
                <Tabs defaultActiveKey="1" className="tab-block">
                    <TabPane tab="账户明细列表" key="1">
                        <div className="tab-items">
                            <div className="form-block">
                                <Form className='form-part' {...formItemLayout} >
                                    <Row>
                                        <Col span={5}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="账户编号:" 
                                                accountnum="accountnum"
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
                                                label="业务类型:" 
                                                businesstype="businesstype"
                                                rules={
                                                    [
                                                        {
                                                            required: false,
                                                            message: '请选择业务类型'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Select placeholder="请选业务类型">
                                                    <Option value="1">全部</Option>
                                                    <Option value="2">系统调账</Option>
                                                    <Option value="3">代付出款</Option>
                                                    <Option value="4">代付退款</Option>
                                                    <Option value="5">代收入账</Option>
                                                </Select>
                                            </Form.Item> 
                                        </Col>
                                        <Col span={5}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="资金标识:" 
                                                moneymark="moneymark"
                                                rules={
                                                    [
                                                        {
                                                            required: false,
                                                            message: '请选择资金标识'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Select placeholder="请选择资金标识">
                                                    <Option value="1">全部</Option>
                                                    <Option value="2">加</Option>
                                                    <Option value="3">减</Option>
                                                </Select>
                                            </Form.Item> 
                                        </Col>
                                        <Col span={6} style={{marginLeft:-80}}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="交易日期:" 
                                                tradetime="tradetime"
                                                rules={
                                                    [
                                                        {
                                                            required: false,
                                                            message: '请输入充值单号'
                                                        }
                                                    ]
                                                }
                                            >   
                                                <ConfigProvider locale={zh_CN}>
                                                    <RangePicker
                                                        showTime={{ format: 'YYYY-MM-DD' }}
                                                        format="YYYY-MM-DD"
                                                    />
                                                </ConfigProvider>
                                                
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
