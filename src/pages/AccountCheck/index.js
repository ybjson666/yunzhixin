import React,{ Component }from 'react';
import { Tabs,Table} from 'antd';
import './accountCheck.less';



const { TabPane } = Tabs;

export default class AccountCheck extends Component{

    state={
        instDatas:[]
    }

    componentDidMount=()=>{

        const instDatas=[
            {   
                accountNum:"DKS255551",
                instNum: 'DLS0832059',
                instName: "深圳市超盟之家商业管理有限公司",
                serial:"12554844477",
                businessType:"线上",
                moneyMark:"全购",
                oriMoney:"3000",
                tradeMoney: '2000.00',
                remine:"1000.00",
                tradeDate:"2019-04-17 15:35:23",
                remark:"暂无",
                id:"001"
            },
            {   
                accountNum:"DKS255551",
                instNum: 'DLS0832059',
                instName: "深圳市超盟之家商业管理有限公司",
                serial:"12554844477",
                businessType:"线上",
                moneyMark:"全购",
                oriMoney:"3000",
                tradeMoney: '2000.00',
                remine:"1000.00",
                tradeDate:"2019-04-17 15:35:23",
                remark:"暂无",
                id:"002"
            },
            {   
                accountNum:"DKS255551",
                instNum: 'DLS0832059',
                instName: "深圳市超盟之家商业管理有限公司",
                serial:"12554844477",
                businessType:"线上",
                moneyMark:"全购",
                oriMoney:"3000",
                tradeMoney: '2000.00',
                remine:"1000.00",
                tradeDate:"2019-04-17 15:35:23",
                remark:"暂无",
                id:"003"
            },
            {   
                accountNum:"DKS255551",
                instNum: 'DLS0832059',
                instName: "深圳市超盟之家商业管理有限公司",
                serial:"12554844477",
                businessType:"线上",
                moneyMark:"全购",
                oriMoney:"3000",
                tradeMoney: '2000.00',
                remine:"1000.00",
                tradeDate:"2019-04-17 15:35:23",
                remark:"暂无",
                id:"004"
            }
        ]

        this.setState({ instDatas })
    }

    render(){

        const columns=[
            {
                title: '账户编号',
                dataIndex: 'accountNum',
                key: 'accountNum',
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
                title: '交易系统流水号',
                dataIndex: 'serial',
                key: 'serial',
            },
            {
                title: '业务类型',
                dataIndex: 'businessType',
                key: 'businessType',
            },
            {
                title: '资金标识',
                dataIndex: 'moneyMark',
                key: 'moneyMark',
            },
            {
                title: '原金额',
                dataIndex: 'oriMoney',
                key: 'oriMoney',
            },
            {
                title: '交易金额',
                dataIndex: 'tradeMoney',
                key: 'tradeMoney',
            },
            {
                title: '余额',
                dataIndex: 'remine',
                key: 'remine',
            },
            {
                title: '交易日期',
                dataIndex: 'tradeDate',
                key: 'tradeDate',
            },
            {
                title: '备注',
                dataIndex: 'remark',
                key: 'remark',
            },
            {
                title: '操作',
                dataIndex: 'operate',
                key: 'operate',
                render:()=>(
                    <div className="operate-wraps">
                        <span>提交</span>
                    </div>
                )
            },
        ]

        return(
            <div className="accountChe-container">
                <Tabs defaultActiveKey="1" className="tab-block">
                    <TabPane tab="调账审核信息列表" key="1">
                        <div className="tab-items">
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
