import React,{ Component }from 'react';
import { Tabs,Input,Table,Row,Col, Button,Form,DatePicker,ConfigProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import './accountCharge.less';
import money from './images/qianbao.png';
import checks from './images/daifu.png';


const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

export default class AccountCharge extends Component{

    state={
        instDatas:[]
    }

    componentDidMount=()=>{

        const instDatas=[
            {
                chargeNum: 'DLS0832059',
                instNum: "深圳市超盟之家商业管理有限公司",
                briefName:"充值机构",
                money: '2000.00',
                chargeTime:"2019-04-17 15:35:23",
                account:"622584568841458",
                status:"充值完成",
                id:"001"
            },
            {
                chargeNum: 'DLS0832059',
                instNum: "深圳市超盟之家商业管理有限公司",
                briefName:"充值机构",
                money: '2000.00',
                chargeTime:"2019-04-17 15:35:23",
                account:"622584568841458",
                status:"充值完成",
                id:"002"
            },
            {
                chargeNum: 'DLS0832059',
                instNum: "深圳市超盟之家商业管理有限公司",
                briefName:"充值机构",
                money: '2000.00',
                chargeTime:"2019-04-17 15:35:23",
                account:"622584568841458",
                status:"充值完成",
                id:"003"
            },
            {
                chargeNum: 'DLS0832059',
                instNum: "深圳市超盟之家商业管理有限公司",
                briefName:"充值机构",
                money: '2000.00',
                chargeTime:"2019-04-17 15:35:23",
                account:"622584568841458",
                status:"充值完成",
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
                title: '充值编号',
                dataIndex: 'chargeNum',
                key: 'chargeNum',
            },
            {
                title: '机构号',
                dataIndex: 'instNum',
                key: 'instNum',
            },
            {
                title: '机构简称',
                dataIndex: 'briefName',
                key: 'briefName',
            },
            {
                title: '充值金额',
                dataIndex: 'money',
                key: 'money',
            },
            {
                title: '充值时间',
                dataIndex: 'chargeTime',
                key: 'chargeTime',
            },
            {
                title: '打款账号',
                dataIndex: 'account',
                key: 'account',
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
            } 
        ]

        return(
            <div className="inst-container">
                <Tabs defaultActiveKey="1" className="tab-block">
                    <TabPane tab="账户历史列表" key="1">
                        <div className="tab-items">
                            <div className="datas-block">
                                <div className="datas-item">
                                    <span className="datas-label">账户余额：</span>
                                    <span className="datas-val">￥2132455</span>
                                </div>
                                <div className="datas-item">
                                    <span className="datas-icon"><img src={money} alt=""/></span>
                                    <span className="datas-label">今日充值：</span>
                                    <span className="datas-val">￥213.00</span>
                                </div>
                                <div className="datas-item">
                                    <span className="datas-icon"><img src={checks} alt=""/></span>
                                    <span className="datas-label">今日代付：</span>
                                    <span className="datas-val">￥2213.00</span>
                                </div>
                            </div>
                            <div className="form-block">
                                <Form className='form-part' {...formItemLayout} >
                                    <Row>
                                        <Col span={5}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="充值单号:" 
                                                instnum="instnum"
                                                rules={
                                                    [
                                                        {
                                                            required: false,
                                                            message: '请输入充值单号'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Input  placeholder='请输入充值单号'/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={6} style={{marginLeft:-80}}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="支付时间:" 
                                                instnum="payTime"
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
                                        <Col span={1} >
                                            <Button type="primary">重置</Button>
                                        </Col>
                                        <Col span={1}>
                                            <Button type="primary">导出</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            <div className="tab-section">
                                <div className="data-show-block">
                                    <span className="show-labsel">合计充值金额：</span>
                                    <span>503.00</span>
                                    <span className="show-labsel" style={{marginLeft:10}}>合计充值笔数：</span>
                                    <span>2500.00</span>
                                </div>
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
