import {useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Logo from '../../assets/imgs/logo.png'
import {UilSignOutAlt} from "@iconscout/react-unicons";
import  {sidebarData} from '../../Data/Data'
import './Sidebar.css'
const Sidebar = () => {
    const [selected, setselected] = useState(0)
  return (
    <div className='Sidebar'>
        <div className="logo">
            <img src={Logo} alt="" />
            <span>Sh<span>o</span>ps</span>
        </div>
        {/* Menu */}
        <div className="menu">
            {sidebarData.map((item,index)=>{
                return (
                    <div className={selected===index? 'menuItem active':'menuItem'} key={index}
                    onClick={()=>setselected(index)}
                    
                    
                    >
                        <item.icon/>
                        <span>{item.heading}</span>
                    </div>
                )
            })}
            <div className="menuItem">
                <UilSignOutAlt/>
            </div>

        </div>
    </div>
  )
}

export default Sidebar