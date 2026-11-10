import {NavLink} from 'react-router-dom'
const DashboardSidebar=()=>{
    const linkStyle = ({ isActive }) =>
  `no-underline ${
    isActive ? "text-teal-400 font-bold" : "text-black"
  }`  
  return(
    <div calssName='fixed top-0 left-0 w-[250px] h-screen bg-white shadow-[0_3px_4px_-3px_rgba(0,0,0,0.3)]'>
<div className='flex flex-col gap-5 p-4 '>
<NavLink to="/Dashboard" className={linkStyle} >Dashboard</NavLink>
<NavLink to="/addProductPage" className={linkStyle} >Product</NavLink>
<NavLink to="/Orders" className={linkStyle} >Orders</NavLink>
<NavLink to="/Users" className={linkStyle} >Users</NavLink>
</div>
        </div>
)}
export default DashboardSidebar