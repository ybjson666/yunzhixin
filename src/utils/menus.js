export const navMenus=[
    {
        name:'首页管理',
        children:[
            {
                name:"首页",
                path:'/'
            }
        ]
    },
    {
        name:'机构管理',
        children:[
            {
                name:"机构信息",
                path:'/instInfo'
            },
            {
                name:"机构费率",
                path:'/instPercent'
            },
            {
                name:"机构审核",
                path:'/instCheck'
            }
        ]
    },
    {
        name:'账户中心',
        children:[
            {
                name:"账户信息",
                path:'/accountInfo'
            },
            {
                name:"账户充值历史",
                path:'/accountCharge'
            },
            {
                name:"调账审核",
                path:'/accountCheck'
            },
            {
                name:"日终余额查询",
                path:'/balance'
            }
        ]
    },
    {
        name:'交易管理',
        children:[
            {
                name:"交易记录",
                path:'/dealRecord'
            },
            {
                name:"交易对账",
                path:'/dealChecking'
            },
            {
                name:"交易累计",
                path:'/dealSum'
            },
            {
                name:"客户交易统计",
                path:'/dealCcount'
            }
        ]
    },
    {
        name:'发票管理',
        children:[
            {
                name:"发票申请",
                path:'/billApply'
            },
            {
                name:"邮寄地址",
                path:'/address'
            },
            {
                name:"发票审核",
                path:'/billCheck'
            }
        ]
    },
    {
        name:'风险管理',
        children:[
            {
                name:"资质业务核实",
                path:'/businessVerify'
            },
            {
                name:"董监高灰名单",
                path:'/grayList'
            },
            {
                name:"风控黑名单",
                path:'/blankList'
            },
            {
                name:"交易限额风控",
                path:'/riskCtrol'
            },
            {
                name:"调单管理",
                path:'/manager'
            }
        ]
    }
]