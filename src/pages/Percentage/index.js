import React,{ Component }from 'react';
import { Tabs,Input,Table,Row,Col, Button,Form,Radio,Select } from 'antd';
import './percentage.less';



const { TabPane } = Tabs;
const { Option } = Select;

export default class Percentage extends Component{

    state={
        instDatas:[]
    }

    componentDidMount=()=>{
        const instDatas=[
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                source: '平安-青羊',
                proType:"代付",
                perType:"百分比",
                percente:"0.06",
                status:"未开通",
                createTime:"2019-04-17 15:35:23",
                updateTime:"2019-04-17 15:35:23",
                id:"001"

            },
            {
                instNum: 'DLS0832959',
                instName: "成都市超盟金服技术信息服务有限公司",
                source: '平安-郫都',
                proType:"代付",
                perType:"百分比",
                percente:"0.06",
                status:"开通",
                createTime:"2019-04-17 15:35:23",
                updateTime:"2019-04-17 15:35:23",
                id:"002"
            },
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                source: '平安-青羊',
                proType:"代付",
                perType:"百分比",
                percente:"0.06",
                status:"未开通",
                createTime:"2019-04-17 15:35:23",
                updateTime:"2019-04-17 15:35:23",
                id:"003"

            },
            {
                instNum: 'DLS0832959',
                instName: "成都市超盟金服技术信息服务有限公司",
                source: '平安-郫都',
                proType:"代付",
                perType:"百分比",
                percente:"0.06",
                status:"开通",
                createTime:"2019-04-17 15:35:23",
                updateTime:"2019-04-17 15:35:23",
                id:"004"
            },
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                source: '平安-青羊',
                proType:"代付",
                perType:"百分比",
                percente:"0.06",
                status:"未开通",
                createTime:"2019-04-17 15:35:23",
                updateTime:"2019-04-17 15:35:23",
                id:"005"

            },
            {
                instNum: 'DLS0832959',
                instName: "成都市超盟金服技术信息服务有限公司",
                source: '平安-郫都',
                proType:"代付",
                perType:"百分比",
                percente:"0.06",
                status:"开通",
                createTime:"2019-04-17 15:35:23",
                updateTime:"2019-04-17 15:35:23",
                id:"006"
            },
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                source: '平安-青羊',
                proType:"代付",
                perType:"百分比",
                percente:"0.06",
                status:"未开通",
                createTime:"2019-04-17 15:35:23",
                updateTime:"2019-04-17 15:35:23",
                id:"007"

            },
            {
                instNum: 'DLS0832959',
                instName: "成都市超盟金服技术信息服务有限公司",
                source: '平安-郫都',
                proType:"代付",
                perType:"百分比",
                percente:"0.06",
                status:"开通",
                createTime:"2019-04-17 15:35:23",
                updateTime:"2019-04-17 15:35:23",
                id:"008"
            },
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                source: '平安-青羊',
                proType:"代付",
                perType:"百分比",
                percente:"0.06",
                status:"未开通",
                createTime:"2019-04-17 15:35:23",
                updateTime:"2019-04-17 15:35:23",
                id:"009"

            },
            {
                instNum: 'DLS0832959',
                instName: "成都市超盟金服技术信息服务有限公司",
                source: '平安-郫都',
                proType:"代付",
                perType:"百分比",
                percente:"0.06",
                status:"开通",
                createTime:"2019-04-17 15:35:23",
                updateTime:"2019-04-17 15:35:23",
                id:"010"
            },
            {
                instNum: 'DLS0800001',
                instName: "测试机构",
                source: '平安-青羊',
                proType:"代付",
                perType:"百分比",
                percente:"0.06",
                status:"未开通",
                createTime:"2019-04-17 15:35:23",
                updateTime:"2019-04-17 15:35:23",
                id:"011"

            },
            {
                instNum: 'DLS0832959',
                instName: "成都市超盟金服技术信息服务有限公司",
                source: '平安-郫都',
                proType:"代付",
                perType:"百分比",
                percente:"0.06",
                status:"开通",
                createTime:"2019-04-17 15:35:23",
                updateTime:"2019-04-17 15:35:23",
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
        // const otherFormItemLayout = {
        //     labelCol: {
        //       xs: { span: 6 },
        //       sm: { span: 4 },
        //       lg:{ span: 3 }
        //     },
        //     wrapperCol: {
        //       xs: { span: 4 },
        //       sm: { span: 19 },
        //       lg:{ span: 10 }
        //     }
        // };
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
                title: '代理商编号',
                dataIndex: 'instNum',
                key: 'instNum',
            },
            {
                title: '代理商名称',
                dataIndex: 'instName',
                key: 'instName',
            },
            {
                title: '接口渠道',
                dataIndex: 'source',
                key: 'source',
            },
            {
                title: '产品类型',
                dataIndex: 'proType',
                key: 'proType',
            },
            {
                title: '费率类型',
                dataIndex: 'perType',
                key: 'perType',
            },
            {
                title: '费率',
                dataIndex: 'percente',
                key: 'percente',
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render:(text,record)=>{
                    return <span className={text==='开通'?'pass':null}>{text}</span>
                }
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime',
            },
            {
                title: '更新时间',
                dataIndex: 'updateTime',
                key: 'updateTime',
            },
            {
                title: '操作',
                dataIndex: 'operate',
                key: 'operate',
                render:()=>(
                    <div className="operate-wraps">
                        <span  style={{marginRight:10}}>查看</span>
                        <span style={{marginRight:10}}>修改</span>
                        <span>添加当前代理费率</span>
                    </div>
                )
            }
            
        ]

        return(
            <div className="inst-container">
                <Tabs defaultActiveKey="1" className="tab-block">
                    <TabPane tab="代理商费率列表" key="1">
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
                                                label="产品类型:" 
                                                instname="proType"
                                                rules={
                                                    [
                                                        {
                                                            required: false,
                                                            message: '请选择品类型'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Select placeholder="请选择产品类型">
                                                    <Option value="1">全部</Option>
                                                    <Option value="2">支付宝</Option>
                                                    <Option value="3">微信公众号</Option>
                                                    <Option value="4">微信</Option>
                                                    <Option value="5">银行网管支付</Option>
                                                    <Option value="6">京东H5</Option>
                                                </Select>
                                            </Form.Item> 
                                        </Col>
                                        <Col span={5}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="接口渠道:" 
                                                instname="interSorce"
                                                rules={
                                                    [
                                                        {
                                                            required: false,
                                                            message: '请输选择接口渠道'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Select placeholder="请选择接口渠道">
                                                    <Option value="1">全部</Option>
                                                    <Option value="2">平安-青羊</Option>
                                                    <Option value="3">平安-郫都</Option>
                                                    <Option value="4">平安-温江</Option>
                                                    <Option value="5">平安-双流</Option>
                                                    <Option value="6">平安-新都</Option>
                                                </Select>
                                            </Form.Item> 
                                        </Col>
                                        <Col span={5}>
                                            <Form.Item style={{ 'marginBottom': '0', width: '100%' }} {...tailFormItemLayout} 
                                                label="状态:" 
                                                instname="status"
                                                rules={
                                                    [
                                                        {
                                                            required: true,
                                                            message: '请输选择状态'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Select placeholder="请选择状态">
                                                    <Option value="1">全部</Option>
                                                    <Option value="2">开通</Option>
                                                    <Option value="3">未开通</Option>
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
                    <TabPane tab="代理商费率添加" key="2" className="tab-block">
                        <div className="tab-items">
                            <div className="tab-items">
                                <Form className='form-part add-form' {...formItemLayout} >
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="请选择代理商编号"
                                                name="agentnum"
                                                rules={[{ required: true, message: '请选择理商编号' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Select placeholder="请选择代理商编号">
                                                    <Option value="1">上海倾宇信息科技有限公司</Option>
                                                    <Option value="2">杭州银豆信息技术有限公司</Option>
                                                    <Option value="3">温州快信电子商务有限公司</Option>
                                                    <Option value="4">浙江茜茜卡信息科技有限公司</Option>
                                                    <Option value="5">湖南乾汇网络科技有限公司</Option>
                                                    <Option value="6">四川通则大数据服务有限公司</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="接口渠道"
                                                name="source"
                                                rules={[{ required: true, message: '请选择接口渠道' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Select placeholder="请选择接口渠道">
                                                    <Option value="1">平安-郫都</Option>
                                                    <Option value="2">平安-温江</Option>
                                                    <Option value="3">平安-双流</Option>
                                                    <Option value="4">平安-新都</Option>
                                                    <Option value="5">平安-武侯</Option>
                                                    <Option value="6">平安-青羊</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="产品类型"
                                                name="proType"
                                                rules={[{ required: true, message: '请选择产品类型' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Select placeholder="请选择产品类型">
                                                    <Option value="1">全部</Option>
                                                    <Option value="2">支付宝</Option>
                                                    <Option value="3">微信公众号</Option>
                                                    <Option value="4">微信</Option>
                                                    <Option value="5">银行网管支付</Option>
                                                    <Option value="6">京东H5</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="费率类型"
                                                name="perType"
                                                rules={[{ required: true, message: '费率类型' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Radio.Group>
                                                    <Radio value="1">百分比</Radio>
                                                    <Radio value="2">固定费率</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="费率"
                                                name="percent"
                                                rules={[{ required: true, message: '请输入费率' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="第三方商户号"
                                                name="shopNum"
                                                rules={[{ required: true, message: '请输入第三方商户号' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20}>
                                            <Form.Item
                                                label="备注"
                                                name="remark"
                                                rules={[{ required: true, message: '请输入备注' }]}
                                                {...otherFormItemLayout2} 
                                            >
                                                <Input.TextArea />
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
