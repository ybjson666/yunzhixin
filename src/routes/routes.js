import Home from '../pages/Home'
import Percentage from '../pages/Percentage'
import InstInfo from '../pages/InstInfo'
import InstCheck from '../pages/InstCheck'





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
]