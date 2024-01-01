// import {useDispatch} from "react-redux"
// import { logout } from "../store/reducers/authReducer";
import {FiMenu} from 'react-icons/fi';
import Input from '../Input';
import {FaSearch} from 'react-icons/fa';
import {MdOutlineNotificationsActive} from 'react-icons/md'
const AdminNav = ({openSidebar,side,closeSidebar}) => {
    // const dispatch = useDispatch();
    // const adminLogout = () => {
    //     dispatch(logout('admin-token'));
    // }
    //  onClick={adminLogout}
    // <i className="bi bi-filter-left text-white text-2xl cursor-pointer" onClick={openSidebar}></i>

    return(
     <nav className={`fixed  top-0 right-0   ${side==='left-0 md:-left-64'?'left-0':'left-0 md:left-64'}`}>
      <div className="bg-[#A47ABF] w-full flex justify-between  items-center p-4">
        <div className=' flex items-center gap-4'>
            {side==='left-0 md:-left-64'?<FiMenu size={30} onClick={closeSidebar}  color='white' />:<FiMenu size={30} color='white'  onClick={openSidebar}  />}
    
            <h2 className='  text-white text-xl font-medium'>Welcome Dashboard</h2>
        </div>

        <div className=' flex items-center gap-5'>
           
           <div className=' hidden md:block w-96'>
            <Input  placeholder={`Search...`} Icon={<FaSearch/>} className={' w-full'} />
           </div>
           <div>
            <MdOutlineNotificationsActive color='white' size={30}/>
           </div>
            <div>
                <img  src={require('../../assets/image/user.png')}  className=' w-12 h-12 rounded-full' />
            </div>
        </div>
    
     
      </div>
     </nav>
    )
}
export default AdminNav;