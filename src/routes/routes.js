import Home from '../pages/Home'
import Percentage from '../pages/Percentage'
import InstInfo from '../pages/InstInfo'
import InstCheck from '../pages/InstCheck'
import AccountInfo from '../pages/AccountInfo'
import AccountCharge from '../pages/AccountCharge'
import AccountCheck from '../pages/AccountCheck'
import AccountCtrol from '../pages/AccountCtrol'
import Balance from '../pages/Balance'




export default [
    {   
        name:"home",
        path:"/",
        component:Home
    },
    {
        name:"percentage",
        path:"/instPercent",
        component:Percentage
    },
    {
        name:"instInfo",
        path:"/instInfo",
        component:InstInfo
    },
    {
        name:"instCheck",
        path:"/instCheck",
        component:InstCheck
    },
    {
        name:"accountInfo",
        path:"/accountInfo",
        component:AccountInfo
    },
    {
        name:"accountCharge",
        path:"/accountCharge",
        component:AccountCharge
    },
    {
        name:"accountCheck",
        path:"/accountCheck",
        component:AccountCheck
    },
    {
        name:"accountCtrol",
        path:"/accountCtrol",
        component:AccountCtrol
    },
    {
        name:"balance",
        path:"/balance",
        component:Balance
    }
]