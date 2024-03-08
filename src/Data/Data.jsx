import { UilEstate,UilClipboardAlt,UilUsersAlt,UilPackage ,UilChart,UilMoneyWithdrawal,UilUsdSquare} from "@iconscout/react-unicons";

export const sidebarData=[
    {
        icon:UilEstate,
        heading:'Dashboard',
    },
    {
        icon:UilClipboardAlt,
        heading:'Order',
    },
    {
        icon:UilUsersAlt,
        heading:'Customers',
    },
    {
        icon:UilPackage,
        heading:'Products',
    },
    {
        icon:UilChart,
        heading:'Analytics',
    },
   
]
export const CardsData=[
    {
    title:"Sales",
    color:{
        background: 'linear-gradient(180deg, #BB67FF 0%, #C484F3 100%)',
        boxShadow: '0px 10px 20px 0px #e0c6f5'
    },
    barValue:70,
    value:'25,900',
    png:UilUsdSquare,
    series:[{
        name:'sales',
        data:[31,40,28,51,42,109,100]
    }]

},

{
    title:"Revenue",
    color:{
        background: 'linear-gradient(180deg, #cc8d6d 0%, #c09ada 100%)',
        boxShadow: '0px 10px 20px 0px #b499c9'
    },
    barValue:80,
    value:'19,800',
    png:UilMoneyWithdrawal,
    series:[{
        name:'sales',
        data:[10,100,50,70,80,30,40],
    }]

},


{
    title:"Expenses",
    color:{
        background: 'linear-gradient(180deg, #4b4440 0%, #aec66e 100%)',
        boxShadow: '0px 10px 20px 0px #dfd14e'
    },
    barValue:80,
    value:'19,800',
    png:UilMoneyWithdrawal,
    series:[{
        name:'sales',
        data:[10,100,50,70,80,30,40],
    }]

},

]